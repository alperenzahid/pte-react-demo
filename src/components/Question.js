import Timer from "react-compound-timer";
import React from "react";
import ReadAloud from "./exam/ReadAloud";
import RepeatSentence from "./exam/RepeatSentence";
import DescribeImage from "./exam/DescribeImage";
import SummarizeText from "./exam/SummarizeText";
import ReadingSingleChoose from "./exam/ReadingSingleChoose";
import ReorderParagraph from "./exam/reorder-paragraphs/ReorderParagraph";
import FillBlanks from "./exam/FillBlanks";
import ListenSingleChoose from "./exam/ListenSingleChoose";
import HighlightWords from "./exam/HighlightWords";
import WriteDictation from "./exam/WriteDictation";


function Question({data}) {
    let {title, current, total, currentTime, totalTime, description, type} = data;
    return (
        <div className="container">
            <div className="card">
                <div className="card-header card-header-info position-relative">
                    <h4 className="card-title">{title}</h4>
                    <div id="fixed">
                        <div id="kacinci">
                            <button type="button" className="btn btn-default btn-round btn-white" data-toggle="tooltip"
                                    data-placement="bottom" title="">
                                {current} / {total}
                            </button>
                        </div>
                        <div id="kalan">
                            <button type="button" className="btn btn-default btn-round btn-white" data-toggle="tooltip"
                                    data-placement="bottom" title="Remaining time">
                                <Timer
                                    timeToUpdate={1000}
                                    initialTime={currentTime} formatValue={value => {
                                    if (value < 10) return "0" + value;
                                    return value;
                                }}>
                                    <Timer.Hours/>:
                                    <Timer.Minutes/>:
                                    <Timer.Seconds/>
                                </Timer> / {totalTime}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body" id="icerik">
                    <div className="q-title">
                        {description}
                    </div>

                    {type === "read-aloud" && <ReadAloud data={data} />}
                    {type === "repeat-sentence" && <RepeatSentence data={data} />}
                    {type === "describe-image" && <DescribeImage data={data} />}
                    {type === "summarize-text" && <SummarizeText data={data} />}
                    {type === "reading-single-choose" && <ReadingSingleChoose data={data} />}
                    {type === "reorder-paragraph" && <ReorderParagraph data={data} />}
                    {type === "fill-blanks" && <FillBlanks data={data} />}
                    {type === "listen-single-choose" && <ListenSingleChoose data={data} />}
                    {type === "highlight-words" && <HighlightWords data={data} />}
                    {type === "write-dictation" && <WriteDictation data={data} />}

                </div>
            </div>
            <div className="text-center">
                <p>Pearson Test Of English Academic - Ibn Haldun University</p>
            </div>
        </div>
    )
}

export default Question
