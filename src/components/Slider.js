import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import "../App.css";
import { listOfCatPics } from "../services/services";
import SwipeComponent from "./SwipeComponent";

export default function Slider() {
  const itemWidth = "100%";
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = listOfCatPics.length - 1;

  const { startTouch, endTouch } = SwipeComponent(
    currentIndex,
    handleIndexChange
  );
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleIndexChange(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= maxIndex) {
      newIndex = maxIndex;
    }

    setCurrentIndex(newIndex);
  }

  function SliderItem(props) {
    const { item } = props;
    return (
      // <div className="slider-item" style={{ width: itemWidth }}>
      <img
        src={item}
        className="slider-item"
        style={{ width: itemWidth }}
      ></img>

      // </div>
    );
  }

  function SliderRadio(props) {
    const { item, index } = props;
    return (
      <input
        checked={index == currentIndex ? true : false}
        type="radio"
        id={item}
        className="test"
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
      }, 5000);

      return () => clearInterval(timer);
    }
  });

  return (
    <>
      <div className="test-wrapper">
        <div
          className="slider"
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          onTouchStart={startTouch}
          onTouchEnd={endTouch}
        >
          <div
            className="inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {listOfCatPics.map((item) => (
              <SliderItem key={item.id} item={item.image} />
            ))}
          </div>

          <div className="indicators">
            {listOfCatPics.map((item, index) => (
              <SliderRadio key={index} item={item} index={index} />
            ))}
          </div>

          <div className="indicators">
            <button onClick={() => handleIndexChange(currentIndex - 1)}>
              Prev
            </button>
            <button onClick={() => handleIndexChange(currentIndex + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
