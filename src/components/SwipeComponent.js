export default function SwipeComponent(currentIndex, handleIndexChange) {
  const swipeStep = 10;

  var startX = undefined;
  var endX = undefined;

  var startXMouse = undefined;
  var endXMouse = undefined;

  function startClick(e) {
    e.preventDefault();
    e.stopPropagation()
    startXMouse = e.clientX;
  }

  function endClick(e) {
    endXMouse = e.clientX;
    swipe(startXMouse, endXMouse);
  }

  function moveMouse(e) {
    if (e.cancelable) {
      e.preventDefault();
      e.stopPropagation();
    }  
  }

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
    swipe(startX, endX);
  }

  function swipe(start, end) {
    // if (endX - startX < -swipeStep) {
    //   handleIndexChange(currentIndex + 1);
    // } else if (endX - startX > swipeStep) {
    //   handleIndexChange(currentIndex - 1);
    // }
    //console.log(`startX = ${start}, endX = ${end}`)
    if (end - start < -swipeStep) {
      handleIndexChange(currentIndex + 1);
    } else if (end - start > swipeStep) {
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
    startClick,
    endClick,
    moveMouse
  };
}
