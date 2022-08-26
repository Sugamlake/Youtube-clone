import React from "react";
import { Avatar } from "@material-ui/core";

export const VideoPlayer = ({
    player, title, channel, channelImage, subs, views, timestamp, description,
}) => {
    return (
        <div className="videoPlayer">
            <div className="videoPlayer__left">
                <img alt={channel} src={channelImage} />
                <div className="videoPlayer__text">
                    <h3>{title}</h3>
                    <p className="videoPlayer__headline">
                        {channel} •{" "}
                        <span className="videoPlayer__subs">
                            <span className="videoPlayer__subsNumber">{subs}</span> Subscribers
                        </span>{" "}
                        {views} views • {timestamp}
                    </p>
                    <p className="videoPlayer__description">{description}</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html:player}} className="videoPlayer__right">
                {/* <iframe title={title} src={player} frameBorder="0" allowFullScreen /> */}
            </div>
        </div>
    );
}