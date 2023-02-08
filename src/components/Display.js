import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [descData, setDescData] = useState("");

  const getDescData = async () => {
    let postDescArray;

    try {
      // dataArray = await contract.display(account);

      postDescArray = await contract.getDescPostbyAddress(account);

      const str = postDescArray.toString();
      const str_array = str.split(",");
      console.log(str);
      // console.log(str_array);
      const PostsDesc = str_array.map((item, i) => {
        return (
          <div className="single-post-container">
            <span className="account-name">USER ADDRESS:{account}</span>
            <div className="image-container">
              <textarea
                name="descriptiontext"
                id="discription-text"
                rows="9"
                key={i}
                value={item}
                disabled="true"
                className="discription-text"
              ></textarea>
            </div>
            {/* <div className="discription">
            <span className="discription-text">this is post discription</span>
          </div> */}
            <hr />
          </div>
        );
      });
      setDescData(PostsDesc);
    } catch (e) {
      alert("You don't have Posts");
    }
  };

  const getdata = async () => {
    let dataArray;
    try {
      // dataArray = await contract.display(account);

      dataArray = await contract.getPostbyAddress(account);
      // console.log("arrayyyy", dataArray);
      // console.log("typeeeee of varrrr", dataArray);
    } catch (e) {
      alert("You don't have access");
    }

    const str = dataArray.toString();
    const str_array = str.split(",");
    // console.log(str);
    // console.log(str_array);
    const images = str_array.map((item, i) => {
      return (
        <div className="single-post-container">
          <span className="account-name">USER ADDRESS:{account}</span>
          <div className="image-container">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="post-image"
            ></img>
          </div>
          {/* <div className="discription">
            <span className="discription-text">this is post discription</span>
          </div> */}
          <hr />
        </div>
      );
    });
    setData(images);
  };
  getdata();
  getDescData();
  return (
    <div className="main-container">
      <div className="posts-container">
        {/* <div className="image-list">{data}</div> */}
        <div>{data}</div>

        <div>{descData}</div>
      </div>
    </div>
  );
};
export default Display;
