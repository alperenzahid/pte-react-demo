import React, {useState} from "react";
import ReactAudioPlayer from 'react-audio-player';
import {CountdownCircleTimer} from "react-countdown-circle-timer";


function Listener({src,onComplete}) {

    const [options, setOptions] = useState(
        {
            'autoPlay' : false,
            'duration' : 0
        }
    );

    return (
        <div>

            <ReactAudioPlayer
                src={src}
                autoPlay
                onLoadedMetadata={(event) => {
                    event.target.classList.add("loaded");
                    console.log(event.target.duration);
                    setOptions({
                        autoPlay: true,
                        duration: event.target.duration
                    })
                }}
                onEnded={onComplete}
            />

            <div id="loading" className="text-center">
                <span id="time"/> <br/>
                <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"/> <br/>
                <span>Recording...</span>
            </div>

            {options.autoPlay && <CountdownCircleTimer
                durationSeconds={options.duration}
                strokeWidth={6}
                size={60}
                colors={[
                    ['#da3553', .5],
                    ['#8f1a2f']
                ]}
                isPlaying
                onComplete={() => {

                }}
                renderTime={(remainingTime) => {
                    return remainingTime;
                }}
            />}

        </div>
    )
}

export default Listener
