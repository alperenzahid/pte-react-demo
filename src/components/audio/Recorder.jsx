import React ,{ useState,useEffect }  from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

import {initgRecorder,gRecorder} from "../../common/Recorder";

function Recorder(props) {

    const [isRecording, setIsRecording] = useState(
        false
    );

    useEffect(() => {
        initgRecorder().then(function () {
            gRecorder.start();
            setIsRecording(true);
        });
    }, []);


    if(!isRecording){
        return (
            <div>
                ...
            </div>
        )
    }

    return (
        <div>
             <CountdownCircleTimer
                durationSeconds={props.duration}
                strokeWidth={6}
                size={60}
                colors={[
                    ['#da3553', .5],
                    ['#8f1a2f']
                ]}
                isPlaying
                onComplete={props.onComplete}
                renderTime={(remainingTime) => {
                    return remainingTime;
                }}
            />


        </div>
    )
}

export default Recorder
