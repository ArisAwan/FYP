import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { useState } from "react";
import {FloatButton} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const Posts = () =>{
    return (
        <div className="main-container">
            <div className="posts-container">
                <div className="single-post-container">

                    <span className="account-name">At-the-top</span>
                    <div className="image-container">
                        <img src="/Images/raining.jpg" alt="Couldn't Load Post" className="post-image"/>
                    </div>
                    <div className="discription">
                        <span className="discription-text">this is post discription</span>
                    </div>

                </div>
            </div>
            <FloatButton icon={<PlusOutlined />} tooltip='New Post' size='large'
                onClick={()=>{
                    //can decide what to do on click
                }
            }
            />
        </div>
    )
}

export default Posts;