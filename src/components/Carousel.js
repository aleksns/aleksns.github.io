import React, { useState } from "react";
import "../App.css";
import { listOfCatPics } from "../services/services";
import SwipeComponent from "./SwipeComponent";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = listOfCatPics.length - 1;
  //const [isMouseOver, setIsMouseOver] = useState(false);

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
      <div
      className="carousel-item-container"
      >
        <img
          id={item.id}
          src={item.image}
          alt="carousel content"
          className="carousel-item"
          style={{ display: index === currentIndex ? "block" : "none" }}
          onTouchStart={startTouch}
          onTouchEnd={endTouch}
          // onTouchMove={moveTouch}
        />
      </div>
    );
  }

  function CarouselRadio(props) {
    const { index } = props;
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
          // onMouseEnter={() => setIsMouseOver(true)}
          // onMouseLeave={() => setIsMouseOver(false)}
          // onTouchStart={startTouch}
          // onTouchEnd={endTouch}
          // onTouchMove={moveTouch}
        >
          {listOfCatPics.map((item, index) => (
            <CarouselContent key={item.id} item={item} index={index} />
          ))}

          <div className="center-section carousel-radio-section">
            {listOfCatPics.map((item, index) => (
              <CarouselRadio key={item.id} index={index} />
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
