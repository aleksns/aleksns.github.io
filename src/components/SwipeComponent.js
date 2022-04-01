export default function SwipeComponent(currentIndex, handleIndexChange) {
  const swipeStep = 10;
  const swipeHoldTimeAllowed = 1000;

  var startX = undefined;
  var endX = undefined;

  var timeStart = 0;
  var timeEnd = 0;

  function startTouch(e) {
    timeStart = Date.now();
    startX = e.touches[0].clientX;
  }

  function endTouch(e) {
    timeEnd = Date.now();
    endX = e.changedTouches[0].clientX;

    if (timeEnd - timeStart < swipeHoldTimeAllowed) {
      swipe();
    }
  }

  function swipe() {
    if (endX - startX < -swipeStep) {
      // if(current !== -(window.innerHeight * 5)){
      //   current -= window.innerHeight;
      //   setCurrentIndex(currentIndex + 1);
      // }
      handleIndexChange(currentIndex + 1);
    } else if (endX - startX > swipeStep) {
      // if(current !== 0){
      //   current += window.innerHeight;
      //   setCurrentIndex(currentIndex - 1);
      // }
      handleIndexChange(currentIndex - 1);
    }
  }

  function moveTouch(e){
      e.preventDefault()
  }

  return {
    startTouch,
    endTouch,
    moveTouch
  };
}
