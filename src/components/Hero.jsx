import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [activeImg, setActiveImg] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setActiveImg((pre) => !pre);
    }, 2500);
  }, []);
  return (
    <>
      <section>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${
              activeImg
                ? "https://skilldzire.com/images/slider1.png"
                : "https://skilldzire.com/images/slider2.png"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        >
          <div>
            <h2 style={{ marginTop: 0 }}>
              {activeImg ? "Learn Without Limits" : "Web Development"}
            </h2>
            <p>
              {activeImg
                ? "Get unlimited access to over 100+ courses from industry experts."
                : "Industry-recognized certificates and professional training to boost your career."}
            </p>

            <button>{activeImg ? "Explore Courses" : "Get Started"}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
