export default function SwipeComponent(currentIndex, handleIndexChange) {
  const swipeStep = 10;

  var startX = undefined;
  var endX = undefined;

  function startTouch(e) {
    console.log(`STARTtouch`)
    // if (e.type == 'touchstart') {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    //setStartTouchTimes(startTouchTimes + 1);
    startX = e.touches[0].clientX;
  }

  function endTouch(e) {
        endX = e.changedTouches[0].clientX;

        console.log(`touchEND`)
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
      console.log(`SWIPE RIGHT`)
      handleIndexChange(currentIndex + 1);
    } else if (end - start > swipeStep) {
      console.log(`SWIPE LEFT`)
      handleIndexChange(currentIndex - 1);
    }
  }

  function moveTouch(e) {
    if (e.cancelable) {
      //e.preventDefault();
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
