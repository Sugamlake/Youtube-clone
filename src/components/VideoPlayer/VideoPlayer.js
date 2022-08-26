import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./VideoPlayer.css";

export const VideoPlayer = ({
    player, title, channel, channelImage, subs, views, timestamp, description,
}) => {
    const [reduce, setReduce] = React.useState(true); // reduce la información de la descripción del video o la amplia con un true/false
    const handleDescription = () => {
        setReduce(!reduce); //Para que establezca el valor de reduce al contrario si estaba false lo vuelve true y viceversa
    }
    console.log(player);
    return (
        <div className="videoPlayer">
            <iframe 
                width="731"
                height="411"
                src={player}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="videoPlayer__video"
            />
            {/* <div dangerouslySetInnerHTML={{ __html: player }} className="videoPlayer__video"/>  */}
            <div className="videoPlayer__info">
                <h4>{title}</h4>
                <p>{views} views | {timestamp}</p>
                <hr/>
                <div className="videoPlayer__info__user">
                    <Avatar src={channelImage} alt={channel} className="videoPlayer__avatar" />
                    <p>{channel} {subs} subscribers</p>
                    <p>{reduce ? description.extended : description.reduced}</p>
                    <Button onClick={handleDescription}>{reduce ? "Show more" : "Show less"}</Button>
                    <hr/>
                </div>
            </div>
        </div>
    );
}