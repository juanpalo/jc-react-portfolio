import React from 'react';
import profilePicture from "../../../static/assets/images/bio/devtrunk.jpg";
import { convertFromHTML } from 'draft-js';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
                style={{
                    backgroundImage: `url(${profilePicture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"                
                }}
            />

            <div className="right-column">
                asdfghjklzxcvbnmqwertyuiop
            </div>
        </div>
    );
}