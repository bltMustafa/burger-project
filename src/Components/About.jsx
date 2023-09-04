import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../style/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex
          eaque quisquam recusandae distinctio doloribus ducimus voluptates
          explicabo ipsam aut! Temporibus ipsum quibusdam nulla optio
          consectetur ab quasi aut doloribus. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quam quidem, soluta facilis iure labore
          ab voluptatum, ut nesciunt praesentium ullam similique id, quasi eos
          saepe odit repellat ipsum? Distinctio, possimus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Earum dolores itaque rem
          mollitia officiis doloremque maiores quasi placeat facilis officia
          aspernatur, praesentium quos quisquam, eius quo explicabo aperiaate
          aut accusantium odio, reiciendis numquam eum nihil Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Libero voluptatum
          exercitationem nostrum deleniti eius quidem voluptatem? Similique quas
          nemo vero illum, quam dolore quos perferendis libero at itaque! Minus,
          assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur optio expedita incidunt, aut inventore beatae porro
          quaerat sequi quidem ad non neque consectetur, aspernatur nobis nisi
          fuga iste ipsam eaque! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sed aliquam cupiditate repudiandae modi amet facere
          voluptates ut unde, saepe reiciendis in beatae ipsam alias facilis.
          Asperiores eligendi quia ratione blanditiis! Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Omnis vitae voluptatum, odio
          aperiam ratione assumenda, eveniet vel obcaecati expedita nesciunt
          nihil minima officiis provident illo et. Tempore ducimus non autem.
        </p>
      </div>
    </div>
  );
};

export default About;
