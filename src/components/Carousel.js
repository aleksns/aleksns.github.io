import React, { useEffect, useState } from "react";
import "../App.css";
import { listOfCatPics } from "../services/services";
import SwipeComponent from "./SwipeComponent";

const itemWidth = "100%";
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = listOfCatPics.length - 1;
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  const { startTouch, endTouch } = SwipeComponent(
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
      <img
        src={item}
        className="carousel-item"
        // style={{ width: itemWidth }}
      ></img>
    );
  }

  function CarouselRadio(props) {
    const { item, index } = props;
    return (
      <input
        checked={index == currentIndex ? true : false}
        type="radio"
        id={item.id}
        name="catPics"
        onChange={() => handleIndexChange(index)}
      />
    );
  }

  useEffect(() => {
    if (!isMouseOver && matchMedia("(pointer:fine)").matches) {
      const timer = setInterval(() => {
        handleIndexChange(currentIndex + 1);

        if (currentIndex >= maxIndex) {
          handleIndexChange(0);
        }
      }, 15000);

      return () => clearInterval(timer);
    }
  });

  return (
    <>
      <div className="center-section">
        <button
          onClick={() => handleIndexChange(currentIndex - 1)}
          className="carousel-btn"
        >
         {`<`}
        </button>
        <div
          className="carousel"
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          onTouchStart={startTouch}
          onTouchEnd={endTouch}
        >
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 200}%)` }}
          >
            {listOfCatPics.map((item, index) => (
              <CarouselContent key={item.id} item={item.image} index={index}/>
            ))}
          </div>

          <div className="center-section carousel-radio section-header">
            {listOfCatPics.map((item, index) => (
              <CarouselRadio key={index} item={item} index={index} />
            ))}
          </div>
        </div>
        <button
          onClick={() => handleIndexChange(currentIndex + 1)}
          className="carousel-btn"
        >
          {`>`}
        </button>
      </div>
    </>
  );
}
