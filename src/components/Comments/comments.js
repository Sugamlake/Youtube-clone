import React from "react";
import { Avatar } from "@material-ui/core";
import "../VideoPlayer/VideoPlayer.css";


export const Comments = ({
    userImage, user, comment, timestamp,
}) =>{
    return (
        <div className="videoPlayer">
            <div className="videoPlayer__info">
                <div className="videoPlayer__comment">
                    <Avatar src={userImage} alt={user} className="videoPlayer__avatar" />
                    <p>{user}</p>
                    <p>{comment}</p>
                    <p>{timestamp}</p>
                </div>
            </div>
        </div>
    );
}