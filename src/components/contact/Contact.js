import React, { useContext, useEffect} from "react";
import "./contact.css";
import phone from "../../assets/icons/phone.png";
import sms from "../../assets/icons/sms.png";
import skype from "../../assets/icons/skype.png";
import home from "../../assets/icons/home.png";
import telegram from "../../assets/icons/telegram.png";
import instagram from "../../assets/icons/instagram.png";
import lincedin from "../../assets/icons/lincedin.png";
import tiktok from "../../assets/icons/tiktok.png";
import youtube from "../../assets/icons/youtube.png";
import user from "../../assets/icons/user.png";
import ycomment from "../../assets/icons/comment.png";
import { TitleContext } from "../../App";

const Contact = () => {

  const setTitleShow = useContext(TitleContext)

  useEffect(() => {
      setTitleShow(true)
  })
  
  return (
    <div className="contact-1">
      <div className="container">
        <div className="right2">
          <h4 className="contact-title">PHONE</h4>
          <div className="icon-box">
            <img src={phone} alt='' /> <p>+998 99 919 49 94</p>
          </div>

          <h4 className="contact-title">EMAIL</h4>
          <div className="icon-box">
            <img src={sms} alt=''/> <p>you@yourwebsite.com</p>
          </div>

          <h4 className="contact-title">SKYPE</h4>
          <div className="icon-box">
            <img src={skype} alt=''/>
            <p>Jovohirbek.Maxvudov</p>
          </div>

          <h4 className="contact-title">ADDRESS</h4>
          <div className="icon-box">
            <img src={home} alt=''/>
            <p>Uzbekistan, Tashkent</p>
          </div>

          <h4 className="contact-title">SOCIAL PROFILES</h4>
          <div className="icon-botton">
          <div className="icon-botton-box">
            <img src={telegram} alt=''/>
          </div>

          <div className="icon-botton-box">
            <img src={instagram} alt=''/>
          </div>

          <div className="icon-botton-box">
            <img src={lincedin} alt=''/>
          </div>

          <div className="icon-botton-box">
            <img src={tiktok} alt=''/>
          </div>

          <div className="icon-botton-box">
            <img src={youtube} alt=''/>
          </div>
        </div>
        </div>
        <div className="left-div">
          <h3>FEEL FREE TO DROP ME A LINE</h3>
          <p>
            If you have any suggestion, project or even you want to say Hello..
            Please fill out the form below and I will reply you shortly.
          </p>
          <div className="inputs">
            <img src={user} alt=''></img>
          <input placeholder="Your Name" />
          </div>
          <div className="inputs" >
          <img src={sms} alt=''></img>
          <input placeholder="Your email" />
          </div>
          <div className="inputs">
            <img src={ycomment} style={{marginTop:'6%'}} alt=''></img>
          <input placeholder="Your Comment" />
          </div>
          <button>SEND MASSAGE  <img alt='' src={telegram}></img></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
