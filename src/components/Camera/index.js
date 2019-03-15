import React, { useState, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";

function initializeMedia({ player }) {
  if (!("mediaDevices" in navigator)) {
    navigator.mediaDevices = {};
  }

  if (!("getUserMedia" in navigator.mediaDevices)) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      var getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      if (!getUserMedia) {
        return Promise.reject(new Error("getUserMedia is not implemented!"));
      }

      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function(stream) {
      player.srcObject = stream;
    })
    .catch(function(err) {
      // console.log("camera off");
    });
}

function Camera({ open, toggleDialog }) {
  const player = useRef();
  const canvas = useRef();
  const [openDialog, setOpenDialog] = useState(open);
  return (
    <div>
      <Dialog fullScreen open={openDialog} onClose={() => setOpenDialog(false)}>
        {initializeMedia(player)}
        <video ref={player} autoPlay />
        <canvas red={canvas} width="320px" height="240px" />
        <button
          onClick={() => {
            toggleDialog();
            setOpenDialog(false);
          }}
        >
          close
        </button>
      </Dialog>
    </div>
  );
}

export default Camera;
