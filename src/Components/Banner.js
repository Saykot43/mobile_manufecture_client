import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full" style={{ height: "90vh" }}>
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://wallpaperaccess.com/full/4102802.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://thumbs.dreamstime.com/b/g-chip-closeup-motherboard-mixed-artificial-light-communication-future-tech-concept-147728760.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://previews.123rf.com/images/timestopper69/timestopper691909/timestopper69190900033/132136550-the-technician-repairing-the-smartphone-s-motherboard-in-the-lab-by-soldering-method-the-concept-of-.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://media.istockphoto.com/photos/computer-circuit-board-high-technology-electric-laptop-circuit-picture-id1050665874?k=20&m=1050665874&s=612x612&w=0&h=835H-XY-zn8vZR2d4_G2NOU6iat2xltrDQMpOEhls6U=" className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
