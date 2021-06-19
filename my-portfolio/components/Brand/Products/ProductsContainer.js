import classes from "./ProductsContainer.module.scss";
import SingleProduct from "./SingleProduct";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
const ProductsContainer = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  const [sliderMovedX, setSliderMovedX] = useState(0);
  const slider = useRef();
  const container = useRef();
  const handleMouseDown = (e) => {
    const x = e.pageX;
    setMouseX(x);
    setMouseDown(true);
  };

  const handleMouseMove = (e) => {
    const offset = e.pageX - mouseX;
    setMoveX(offset);
  };

  const handleMouseUp = (e) => {
    setMouseDown(false);
  };

  useEffect(() => {
    if (mouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    if (!mouseDown) {
      setSliderX(sliderMovedX);
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDown]);

  useEffect(() => {
    slider.current.style.transform = `translateX(${sliderMovedX}px)`;
  }, [sliderMovedX]);

  useEffect(() => {
    // if (sliderX + moveX < 0) {
    //   setSliderMovedX(0);
    // } else if (sliderX + moveX > slider.current.scrollWidth) {
    //   setSliderMovedX(slider.current.scrollWidth);
    // } else {

    // }
    let newX = sliderX + moveX;
    if (newX < -slider.current.scrollWidth + container.current.scrollWidth) {
      newX = -slider.current.scrollWidth + container.current.scrollWidth;
    } else if (newX > 0) {
      newX = 0;
    }

    setSliderMovedX(newX);
  }, [moveX]);

  return (
    <div ref={container}>
      <div className={classes.productContainer}>
        <ul
          ref={slider}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={(e) => handleMouseUp(e)}
        >
          <li>
            <SingleProduct
              name="Product 1"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 2"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 3"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 4"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 5"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 6"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
          <li>
            <SingleProduct
              name="Product 7"
              collection="Collection 1"
              price="20"
              image="/me.jpg"
              link="/mybrand"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsContainer;
