import { useState } from "react";
import axios from "axios";
import "./PostUpload.css";
const PostUpload = ({ contract, account, provider }) => {
  //To get discription text
  const [description, setDescription] = useState("");

  const handleInput = (e) => {
    const name = e.target.name; //to see which input field is being targeted

    const value = e.target.value; //to get value of targeted input
    console.log("calliinnnggg  Handleeeee");
    setDescription(value); // Setting value in the varialbles
    console.log("descrppppppppppppppppppp is   ", description);
  };
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  let postDescArray;
  const AddPostBloackChain = async (e) => {
    console.log("addpostcalllling");
    e.preventDefault();
    if (description) {
      try {
        const signer = contract.connect(provider.getSigner());
        signer.addPostDescription(description);
        alert("Successfully Uplaod");

        // postDescArray.then((result) => {
        //   console.log("this is result. data", result.data);
        // });

        console.log("My post  arayyyy from block chain", postDescArray);
      } catch (e) {
        alert("Unable to upload post on Blockchain", e);
      }
    } else {
      alert("please write text");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `9fb649761b35eaeed2fd`,
            pinata_secret_api_key: `3bd0c4fcfd38a4594d59561d5600a4ac282de92caa00ff36b3f6b98b25a60227`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log("My image hashhhhhhhhhhhhhhh", ImgHash);

        const signer = contract.connect(provider.getSigner());
        signer.addPostImage(ImgHash);

        // function myloop() {
        //   console.log("my functionnnnnnnnn");
        //   console.log("my arayyyyy length", post_array.length);
        //   for (let i = 0; i < post_array.length; i++) {
        //     console.log("My BHOngiiiii", post_array[i]);
        //   }
        // }
        // myloop();

        // post_array = post_array.toString();
        // post_array = post_array.split(",");
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    } else {
      setFileName("No image selected");
    }
    alert("Successfully Image Uploaded");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <>
      <div className="top">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="choose">
            Choose Image
          </label>
          <input
            disabled={!account}
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
          />
          <span className="textArea">Image: {fileName}</span>
          <button type="submit" className="upload" disabled={!file}>
            Upload File
          </button>
        </form>
      </div>

      <div className="description-text-container">
        <textarea
          name="descriptiontext"
          id="discription-text"
          rows="3"
          onChange={handleInput}
        ></textarea>
      </div>
      <div className="Post-button">
        <input
          type="button"
          value="create post"
          className="btn btn-primary"
          onClick={AddPostBloackChain}
          // disabled={description == ""}
        />
      </div>
    </>
  );
};
export default PostUpload;

// import { useState } from "react";
// import axios from "axios";
// import "./FileUpload.css";
// function FileUpload({ contract, provider, account }) {
//   // const [urlArr, setUrlArr] = useState([]);
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No image selected");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", file);

//           const resFile = await axios({
//             method: "post",
//             url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//             data: formData,
//             headers: {
//               pinata_api_key: `95f328a012f1634eab8b`,
//               pinata_secret_api_key: `8ea64e6b39c91631c66128a7c0e0dde35a6fbdf797a8393cc5ba8bf8d58e9b54`,
//               "Content-Type": "multipart/form-data",
//             },
//           });

//           const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
//           const signer = contract.connect(provider.getSigner());
//           signer.add(account, ImgHash);

//           //setUrlArr((prev) => [...prev, ImgHash]);

//           //Take a look at your Pinata Pinned section, you will see a new file added to you list.
//         } catch (error) {
//           alert("Error sending File to IPFS");
//           console.log(error);
//         }
//       }

//       alert("Successfully Uploaded");
//       setFileName("No image selected");
//       setFile(null); //to again disable the upload button after upload
//     } catch (error) {
//       console.log(error.message); //this mostly occurse when net is not working
//     }
//   };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     console.log(data);

//     const reader = new window.FileReader();

//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//     e.preventDefault();
//   };
//   return (
//     <div className="top">
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="file-upload" className="choose">
//           {/*turn around for avoding choose file */}
//           Choose Image
//         </label>
//         <input
//           disabled={!account} //disabling button when metamask account is not connected
//           type="file"
//           id="file-upload"
//           name="data"
//           onChange={retrieveFile}
//         />
//         <span className="textArea">Image: {fileName}</span>
//         {/* choose file */}
//         <button type="submit" disabled={!file} className="upload">
//           Upload file
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FileUpload;
