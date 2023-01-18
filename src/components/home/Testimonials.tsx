/** @jsxImportSource theme-ui */
import React from "react";
import { CONTAINER_MAX_WIDTH } from "../../utils/constants";
import Slider from "react-slick";

type Props = {};

export default function Testimonials({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      sx={{
        background: "primary",
        padding: "6rem 3rem 10rem",
        "& .slick-dots li button::before": {
          color: "#fff",
        },
        "& .slick-dots li.slick-active button::before": {
          color: "#fff",
        },
      }}
    >
      <div
        sx={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "auto",
        }}
      >
        <h3
          sx={{
            fontSize: "4rem",
            lineHeight: 1.2,
            fontFamily: "body",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Testimonials
        </h3>
        <div sx={{ maxWidth: "60rem", margin: "auto" }}>
          <Slider {...settings}>
            {[1, 2, 3, 4].map(() => (
              <div
                sx={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                }}
              >
                <h3 sx={{ fontSize: ["2rem", "3rem"], fontFamily: "body" }}>
                  John Doe
                </h3>
                <q
                  sx={{
                    fontSize: ["1.5rem", "2rem"],
                    fontFamily: "body",
                    fontStyle: "italic",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  repudiandae perspiciatis recusandae dolor. Laboriosam illum
                  libero recusandae rerum ducimus illo explicabo laudantium
                  consectetur quia provident, asperiores doloremque nemo debitis
                  quo.
                </q>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
