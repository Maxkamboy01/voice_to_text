import React, { useState } from "react";
import { AuthorpageStyle } from "./style";
import MemberImg from "../../assets/manmemberpng.png";
import WomenmemberImg from "../../assets/womanmemberimg.png";
import Womenmemberimg from "../../assets/womanmemberpng.png";
import Hackermemberimg from "../../assets/hackermemberimg.png";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import HiddenGallery from "../../components/hiddenGallery";

function AuthorPage({ isOpen, ismainOpen, closemainSideBar, closeSideBar }) {
  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };
  const [hiddenGallery, sethiddenGallery] = useState(false);
  const [kamilaOpened, setkamilaOpened] = useState(false);
  return (
    <AuthorpageStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      <div className="header_texts">
        <h1 className="page_title">Our Team</h1>
        <h3 className="page_subtitle">
          Our team who will teach you and support while your study!
        </h3>
      </div>
      <div className="container members_box">
        <div className="member_box">
          <div className="image_box">
            <img className="imagetag" src={MemberImg} alt="" />
          </div>
          <h2 className="member_name">Ranchodas Chanchad</h2>
          <p className="member_job">creative leader</p>
          <p className="member_desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum
            quia repellendus nihil minima similique quis dolorum aperiam.
          </p>
          <div className="line"></div>
          <div className="member_sm_links">
            <div className="member_link_box">
              <AiFillFacebook />
            </div>
            <div className="member_link_box">
              <AiFillTwitterSquare />
            </div>
            <div className="member_link_box">
              <AiOutlineInstagram />
            </div>
            <div className="member_link_box">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
        <div className="member_box">
          <div className="image_box">
            <img className="imagetag" src={WomenmemberImg} alt="" />
          </div>
          <h2 className="member_name">Ranchodas Chanchad</h2>
          <p className="member_job">creative leader</p>
          <p className="member_desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum
            quia repellendus nihil minima similique quis dolorum aperiam.
          </p>
          <div className="line"></div>
          <div className="member_sm_links">
            <div className="member_link_box">
              <AiFillFacebook />
            </div>
            <div className="member_link_box">
              <AiFillTwitterSquare />
            </div>
            <div className="member_link_box">
              <AiOutlineInstagram />
            </div>
            <div className="member_link_box">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
        <div className="member_box">
          <div className="image_box">
            <img className="imagetag" src={Womenmemberimg} alt="" />
          </div>
          <h2 className="member_name">Ranchodas Chanchad</h2>
          <p className="member_job">creative leader</p>
          <p className="member_desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum
            quia repellendus nihil minima similique quis dolorum aperiam.
          </p>
          <div className="line"></div>

          <div className="member_sm_links">
            <div className="member_link_box">
              <AiFillFacebook />
            </div>
            <div className="member_link_box">
              <AiFillTwitterSquare />
            </div>
            <div className="member_link_box">
              <AiOutlineInstagram />
            </div>
            <div className="member_link_box">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
        <div className="member_box">
          <div className="image_box">
            {hiddenGallery ? (
              <HiddenGallery setgalleryOpened={sethiddenGallery} />
            ) : (
              <img
                className="imagetag"
                onDoubleClick={() => sethiddenGallery(!hiddenGallery)}
                src={Hackermemberimg}
                alt=""
              />
            )}

            {/* <img
              // lishneye
              onDoubleClick={() => setkamilaOpened(!kamilaOpened)}
              src={kamilaOpened ? DeleteThisImg : Hackermemberimg}
              // lishneye
              alt=""
            /> */}
          </div>

          <h2 className="member_name">Ranchodas Chanchad</h2>
          <p className="member_job">creative leader</p>
          <p className="member_desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum
            quia repellendus nihil minima similique quis dolorum aperiam.
          </p>
          <div className="line"></div>
          <div className="member_sm_links">
            <div className="member_link_box">
              <AiFillFacebook />
            </div>
            <div className="member_link_box">
              <AiFillTwitterSquare />
            </div>
            <div className="member_link_box">
              <AiOutlineInstagram />
            </div>
            <div className="member_link_box">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
    </AuthorpageStyle>
  );
}

export default AuthorPage;
