import React, { useState } from "react";
import { GalleryStyles } from "./styles";
import Img1 from "./images/deletethisimage.jpg";
import Img2 from "./images/deletethisimage2.jpg";
import Img3 from "./images/deletethisimage3.jpg";
import Img4 from "./images/deletethisimage4.jpg";
import Img5 from "./images/deletethisimage5.jpg";
import Img6 from "./images/deletethisimage6.jpg";
import Img7 from "./images/deletethisimage7.jpg";
import Img8 from "./images/deletethisimage8.jpg";
import Img9 from "./images/deletethisimage9.jpg";
import Img10 from "./images/deletethisimage10.jpg";
import Img11 from "./images/deletethisimage11.jpg";
import Img12 from "./images/deletethisimage12.jpg";
import Img13 from "./images/deletethisimage13.jpg";
import Img14 from "./images/deletethisimage14.jpg";
import Img15 from "./images/deletethisimage15.jpg";
import Img16 from "./images/deletethisimage16.jpg";
import Img17 from "./images/deletethisimage17.jpg";
import Img18 from "./images/deletethisimage18.jpg";
import Img19 from "./images/deletethisimage19.jpg";
import Img20 from "./images/deletethisimage20.jpg";
import Img21 from "./images/deletethisimage21.jpg";
import Img22 from "./images/deletethisimage22.jpg";
import Img23 from "./images/deletethisimage23.jpg";
import Img24 from "./images/deletethisimage24.jpg";
import Img25 from "./images/deletethisimage25.jpg";
import Img26 from "./images/deletethisimage26.jpg";
import Img27 from "./images/deletethisimage27.jpg";
import Img28 from "./images/deletethisimage28.jpg";
import Img29 from "./images/deletethisimage29.jpg";
import Img30 from "./images/deletethisimage30.jpg";

function Hiddengallery({ setgalleryOpened }) {
  const [galleryLocked, setgalleryLocked] = useState(true);

  const details = {
    name: "maxkamboykamila",
    password: 1052604,
  };

  const Checkpass = (e) => {
    e.preventDefault();

    const formdetails = {
      inputname: e.target.name.value,
      inputpassword: e.target.password.value,
    };

    if (
      details.name == formdetails.inputname &&
      details.password == formdetails.inputpassword
    ) {
      setgalleryLocked(false);
    } else {
      alert("Сначала напиши мужикаа потом мужичкаа😏😎😀");
    }
  };
  return (
    <GalleryStyles setgalleryOpened={setgalleryOpened}>
      <div className="cover" onClick={() => setgalleryOpened(false)}></div>
      <div className="main_box" galleryLocked={galleryLocked}>
        {galleryLocked ? (
          <form action="submit" onSubmit={(e) => Checkpass(e)}>
            <h1>Нуука это свои тут🔎🤔</h1>
            <label htmlFor="name">Напиши имена🔎</label>
            <input type="text" className="name" id="name" />
            <label htmlFor="password">
              Напиши даты рождения(твой номер😉🤦‍♂️😅)
            </label>
            <input type="password" className="password" id="password" />
            <button>Проверь</button>
          </form>
        ) : (
          <>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img10} alt="" />
            <img src={Img11} alt="" />
            <img src={Img12} alt="" />
            <img src={Img13} alt="" />
            <img src={Img14} alt="" />
            <img src={Img15} alt="" />
            <img src={Img16} alt="" />
            <img src={Img17} alt="" />
            <img src={Img18} alt="" />
            <img src={Img19} alt="" />
            <img src={Img20} alt="" />
            <img src={Img21} alt="" />
            <img src={Img22} alt="" />
            <img src={Img23} alt="" />
            <img src={Img24} alt="" />
            <img src={Img25} alt="" />
            <img src={Img26} alt="" />
            <img src={Img27} alt="" />
            <img src={Img28} alt="" />
            <img src={Img29} alt="" />
            <img src={Img30} alt="" />
          </>
        )}
      </div>
    </GalleryStyles>
  );
}

export default Hiddengallery;
