export default function SwipeComponent(currentIndex, handleIndexChange) {
  const swipeStep = 10;

  var startX = undefined;
  var endX = undefined;

  function startTouch(e) {
    startX = e.touches[0].clientX;
  }

  function endTouch(e) {
    endX = e.changedTouches[0].clientX;
    swipe();
  }

  function swipe() {
    if (endX - startX < -swipeStep) {
      handleIndexChange(currentIndex + 1);
    } else if (endX - startX > swipeStep) {
      handleIndexChange(currentIndex - 1);
    }
  }

  function moveTouch(e) {
    e.preventDefault();
  }

  return {
    startTouch,
    endTouch,
    moveTouch,
  };
}
