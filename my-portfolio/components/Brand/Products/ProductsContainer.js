import classes from "./ProductsContainer.module.scss";
import Scrollbar from "smooth-scrollbar";
import SingleProduct from "./SingleProduct";
import { useEffect, useState, useRef } from "react";
const ProductsContainer = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [touchDown, setTouchDown] = useState(false);
  const [firstTouchX, setFirstTouchX] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  const [sliderMovedX, setSliderMovedX] = useState(0);
  const slider = useRef();
  const myScrollbar = useRef();
  const container = useRef();
  const handleMouseDown = (e) => {
    const x = e.pageX;
    console.log(x);
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
      // window.addEventListener("touchmove", handleMouseMove);
    }
    if (!mouseDown) {
      setSliderX(sliderMovedX);
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("touchmove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("touchmove", handleMouseMove);
    };
  }, [mouseDown]);

  useEffect(() => {
    slider.current.style.transform = `translateX(${sliderMovedX}px)`;
  }, [sliderMovedX]);
  useEffect(() => {
    window.addEventListener("mouseup", () => {
      setMouseDown(false);
    });
    Scrollbar.initAll();
    return () => {
      window.removeEventListener("mouseup", () => {
        setMouseDown(false);
      });
    };
  }, []);
  useEffect(() => {
    let newX = sliderX + moveX;
    if (newX < -slider.current.scrollWidth + container.current.scrollWidth) {
      newX = -slider.current.scrollWidth + container.current.scrollWidth;
    } else if (newX > 0) {
      newX = 0;
    }
    setSliderMovedX(newX);
  }, [moveX]);

  const handleTouchMove = (e) => {
    const touchX = e.changedTouches[0].pageX;
    console.log(e.changedTouches[0]);
    let newX = 2 * (sliderX + touchX - firstTouchX);
    if (newX < -slider.current.scrollWidth + container.current.scrollWidth) {
      newX = -slider.current.scrollWidth + container.current.scrollWidth;
    } else if (newX > 0) {
      newX = 0;
    }
    setSliderMovedX(newX);
  };
  const handleTouchDown = (e) => {
    setFirstTouchX(e.changedTouches[0].pageX);
    setTouchDown(true);
  };
  const handleTouchUp = (e) => {
    setSliderX(sliderMovedX);
    setTouchDown(false);
  };

  return (
    <div ref={container}>
      <div className={classes.productContainer} ref={myScrollbar}>
        <ul
          ref={slider}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={(e) => handleMouseUp(e)}
          // onTouchStart={(e) => handleTouchDown(e)}
          // onTouchEnd={(e) => handleTouchUp(e)}
          // onTouchMove={(e) => handleTouchMove(e)}
          style={mouseDown ? { cursor: "grabbing" } : { cursor: "grab" }}
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
