import React from "react";
import {VideoTestStyle} from "./styles"

function VideoTest() {
  return (
    <VideoTestStyle className="container">
      <div className="test_info">
        <h1 className="theme">Grammatika vaqti!</h1>
        <p className="task">
          Quyidagi videoni yaxshilab tushunib, daftaringizga ham yozib oling!
        </p>
      </div>
      <div className="main_test_box">
        <iframe
          width="885"
          height="498"
          src="https://www.youtube.com/embed/W-sZo6Gtx_E"
          title="Register and Login Page Tutorial | ReactJs, NodeJS, MySQL (Beginner)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="main_subtitle">
          Ushbu videoni yaxshi tushinmagunizcha qayta-qayta ko’ring, chunki
          keyingi mashqlarda bu bilimlar kerak bo’ladi!
        </p>
        <div className="line"></div>
      </div>
    </VideoTestStyle>
  );
}

export default VideoTest;
