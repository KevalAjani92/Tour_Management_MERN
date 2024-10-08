import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            aliquid atque nihil id at nesciunt sint, vitae itaque veritatis
            soluta quaerat labore laudantium dolorem, quae quos ex eveniet ipsa
            aut.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          aliquid atque nihil id at nesciunt sint, vitae itaque veritatis soluta
          quaerat labore laudantium dolorem, quae quos ex eveniet ipsa aut.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          aliquid atque nihil id at nesciunt sint, vitae itaque veritatis soluta
          quaerat labore laudantium dolorem, quae quos ex eveniet ipsa aut.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Donald Trump</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            aliquid atque nihil id at nesciunt sint, vitae itaque veritatis
            soluta quaerat labore laudantium dolorem, quae quos ex eveniet ipsa
            aut.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          aliquid atque nihil id at nesciunt sint, vitae itaque veritatis soluta
          quaerat labore laudantium dolorem, quae quos ex eveniet ipsa aut.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          aliquid atque nihil id at nesciunt sint, vitae itaque veritatis soluta
          quaerat labore laudantium dolorem, quae quos ex eveniet ipsa aut.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Donald Trump</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
