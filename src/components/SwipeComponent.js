export default function SwipeComponent(currentIndex, handleIndexChange) {
  const swipeStep = 10;

  var startX = undefined;
  var endX = undefined;

  function startTouch(e) {
    // if (e.type == 'touchstart') {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    startX = e.touches[0].clientX;
  }

  function endTouch(e) {
    //   if (e.cancelable) {
    //     e.preventDefault();
    //  }
    endX = e.changedTouches[0].clientX;
    // e.stopPropagation();
    // e.preventDefault();
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
    if (e.cancelable) {
      e.preventDefault();
    }
    // if (e.type !== 'touchstart') {
    //   e.stopPropagation();
    // }
  }

  return {
    startTouch,
    endTouch,
    moveTouch,
  };
}
