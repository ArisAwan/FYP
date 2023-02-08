//import logo from './logo.svg';
import Signup_signin from "./artifacts/contracts/Signup_signin.sol/Signup_signin.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import React from "react";
import "./App.css";
import Display from "./components/Display";
import PostUpload from "./components/PostUpload";
import Registration from "./components/Registration";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    //
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const address = await signer.getAddress();
        setAccount(address);
        console.log("currently signin in metamask", address);
        console.log("sheriiiiiiiiirishiiiii", address);
        let contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

        console.log("abi object is ", Signup_signin.abi);
        const contract = new ethers.Contract(
          contractAddress,
          Signup_signin.abi,
          signer
        );

        console.log("this is oyr contract", contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  //everything inside return is called jsx---> means can write html and js both inside
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Route>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route
            exact
            path="/"
            render={() => (
              <Registration
                account={account}
                provider={provider}
                contract={contract}
              />
            )}
          />

          {/* This route is for about component 
          with exact path "/signin", in component 
          props we passes the imported component*/}
          {/* <Route path="/signin" component={Login} /> */}
          <Route
            exact
            path="/signin"
            render={() => (
              <Login
                account={account}
                provider={provider}
                contract={contract}
              />
            )}
          />

          <Route
            exact
            path="/post"
            render={() => (
              <PostUpload
                account={account}
                provider={provider}
                contract={contract}
              />
            )}
          />

          <Route
            exact
            path="/Display"
            render={() => (
              <Display contract={contract} account={account}></Display>
            )}
          />
        </Route>
      </Router>
      {/* <div className='App'>
      <Registration />
    </div> */}
    </>
  );
}

export default App;
