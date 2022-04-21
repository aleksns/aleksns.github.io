import React, { useEffect, useState } from "react";
import "../App.css";
import { listOfCatPics } from "../services/services";
import SwipeComponent from "./SwipeComponent";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = listOfCatPics.length - 1;
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  const { startTouch, endTouch, moveTouch } = SwipeComponent(
    currentIndex,
    handleIndexChange
  );
  

  function handleIndexChange(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= maxIndex) {
      newIndex = maxIndex;
    }
    setCurrentIndex(newIndex);
  }

  function CarouselContent(props) {
    const { item, index } = props;
    return (
      <div className="carousel-item-container">
      <img
        id={item.id}
        src={item.image}
        alt="Carousel Content"
        className="carousel-item"
        onTouchStart={startTouch}
        onTouchEnd={endTouch}
        onTouchMove={moveTouch}
        // style={{ width: itemWidth }}
      ></img>
     </div>
    );
  }

  function CarouselRadio(props) {
    const { item, index } = props;
    return (
      <input
        checked={index == currentIndex ? true : false}
        type="radio"
        id={index}
        name="catPics"
        onChange={() => handleIndexChange(index)}
      />
    );
  }

 // function touchEvents() {
    //const carousel = document.querySelector(".carousel");
    //const carousel = document.getElementById("carousel-id");
    //const carousel = document.querySelector(".carousel");

    //  carousel.addEventListener("mousedown", startClick, false);
    //  carousel.addEventListener("mouseup", endClick, false);
    //  carousel.addEventListener("mousemove", moveMouse, false);

    // const carouselItem = document.getElementById("carousel-id");

    // carouselItem.addEventListener("touchstart", startTouch, false);
    // carouselItem.addEventListener("touchend", endTouch, false);
    // carouselItem.addEventListener("touchmove", moveTouch, false);

    // for(let i = 0; i < listOfCatPics.length; i++) {
    //   let id = listOfCatPics[i].id;
    //   const item = document.getElementById(id);
    //   item.addEventListener("touchstart", startTouch, false);
    //   item.addEventListener("touchend", endTouch, false);
    //   item.addEventListener("touchmove", moveTouch, false);
    // }

    // carouselItem.addEventListener("touchstart", startTouch, false);
    // carouselItem.addEventListener("touchend", endTouch, false);
    // carouselItem.addEventListener("touchmove", moveTouch, false);
 // }

  useEffect(() => {
    // if (!isMouseOver && matchMedia("(pointer:fine)").matches && currentIndex !=0) {
    //   const timer = setInterval(() => {
    //     handleIndexChange(currentIndex + 1);

    //     if (currentIndex >= maxIndex) {
    //       handleIndexChange(0);
    //     }
    //   }, 15000);

    //   return () => clearInterval(timer);
    // }
  });

  // useEffect(() => {
  //   //touchEvents();
  // }, []);

  return (
    <>
      <div className="center-section">
        <button
          onClick={() => handleIndexChange(currentIndex - 1)}
          className="carousel-btn carousel-btn-prev"
        >
         {`<`}
        </button>
        <div
          id="carousel-id"
          className="carousel"
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          // onTouchStart={startTouch}
          // onTouchEnd={endTouch}
          // onTouchMove={moveTouch}
        >
          <div
            id="carousel-slides-id"
            className="carousel-slides"
            style={{ transform: `translateX(-${currentIndex * 250}%)` }}
          >
            {listOfCatPics.map((item, index) => (
              <CarouselContent key={item.id} item={item} index={index}/>
            ))}
          </div>

          <div className="center-section carousel-radio-section">
            {listOfCatPics.map((item, index) => (
              <CarouselRadio key={index} item={item} index={index} />
            ))}
          </div>
        </div>
        <button
          onClick={() => handleIndexChange(currentIndex + 1)}
          className="carousel-btn carousel-btn-next"
        >
          {`>`}
        </button>
      </div>
    </>
  );
}
