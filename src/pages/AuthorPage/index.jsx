import React, { useState } from "react";
import { AuthorpageStyle } from "./style";
import MemberImg from "../../assets/manmemberpng.png";
import WomenmemberImg from "../../assets/womanmemberimg.png";
import Womenmemberimg from "../../assets/womanmemberpng.png";
import Hackermemberimg from "../../assets/hackermemberimg.png";
import DeleteThisImg from "../../assets/deletethisimage.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function AuthorPage({ isOpen, ismainOpen, closemainSideBar, closeSideBar }) {
  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };

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
            <img src={MemberImg} alt="" />
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
            <img src={WomenmemberImg} alt="" />
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
            <img src={Womenmemberimg} alt="" />
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
            <img
              // lishneye
              onDoubleClick={() => setkamilaOpened(!kamilaOpened)}
              src={kamilaOpened ? DeleteThisImg : Hackermemberimg}
              // lishneye
              alt=""
            />
          </div>
          {/* LISHNEYE */}
          <h3>{kamilaOpened ? "AJJI KUKKUUU😜" : ""}</h3>
          {/* LISHNEYE */}

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
