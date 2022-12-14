import * as Scroll from "react-scroll";

const scroll = Scroll.animateScroll;

export const scrollToTop = () => {
  scroll.scrollToTop();
};

export const scrollToElement = (name, offset = 0) => {
  Scroll.scroller.scrollTo(name, {
    duration: 500,
    delay: 0,
    smooth: true,
    offset: offset, // Scrolls to element + 50 pixels down the page
  });
};
