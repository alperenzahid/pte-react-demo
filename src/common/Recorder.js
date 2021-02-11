import Upload from "../utils/Upload";

let chunks = [];
const mimeType = "audio/webm";
let gRecorder;
let recording;

function initgRecorder() {
  if (navigator.mediaDevices == null) {
    return {
      error: "Your browser does not support the audio, check SSL certificates!",
      hasError: true
    };
  }
  return navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: false
    })
    .then(function(newStream) {
      gRecorder = new MediaRecorder(newStream, { type: mimeType });
      gRecorder.addEventListener("dataavailable", onData);
      gRecorder.addEventListener("stop", onStop);
      return gRecorder;
    })
    .catch(function(err) {
      console.log(err.message);
      return { error: "To Continue, Unblock Microphone Usage", hasError: true };
    });
}

function onStop() {
  console.log("on record stop");
  recording = new Blob(chunks, {
    type: mimeType
  });
  chunks = [];
  //console.log("audio url: ",getAudioUrl());
  Upload(recording)
    .then(function(result) {
      console.log("Uploaded Successfully: ", result);
    })
    .catch(function(err) {
      console.log("Upload Error: ", err.message);
    });
}

function getAudioUrl() {
  console.log("creating url...");
  //console.log(recording);
  return URL.createObjectURL(recording);
}

function onData(event) {
  console.log("on data");
  if (typeof event.data === "undefined") return;
  if (event.data.size === 0) return;
  chunks.push(event.data);
}

function stopRecoder() {
  if (gRecorder.state === "recording") gRecorder.stop();
}

export { initgRecorder, gRecorder, getAudioUrl, stopRecoder };
