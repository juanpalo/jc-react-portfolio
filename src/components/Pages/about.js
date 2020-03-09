import React from './node_modules/react';
import profilePicture from "../../../static/assets/images/bio/devtrunk.jpg";
import { convertFromHTML } from './node_modules/draft-js';

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