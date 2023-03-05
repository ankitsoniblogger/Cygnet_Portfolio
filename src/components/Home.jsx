import React from "react";
import img1 from "../assets/img1.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        {/* <main>
          <h1>Cygnet Technlogy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi deserunt doloribus.
          </p>
        </main> */}
      </div>
      <div className="home2">
        <img src={img1} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            minima aspernatur soluta. Temporibus suscipit rerum sunt incidunt
            autem, fugiat dolorum?
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, dolor fuga deleniti eius facere perspiciatis odio
            reprehenderit corporis voluptatem exercitationem quo consectetur
            atque sapiente animi, ea ab fugiat ratione necessitatibus culpa, hic
            porro repellendus commodi voluptate aperiam! Quas eveniet quidem
            sunt temporibus veniam quo, nesciunt error dolorum ex minus vel.
          </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
