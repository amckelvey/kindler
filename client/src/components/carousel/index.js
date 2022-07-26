import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return {
      ...element,
      onClick: () => {
        // update the current dev
        props.updateDev(index);
        // got to the next slide
        setGoToSlide(index);
      },
    };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(true);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    setGoToSlide(props.currentDev);
  }, [props.currentDev]);

  return (
    <div style={{ width: "70%", height: props.height, margin: props.margin }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
