"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import DevButton from "../dev-components/dev-button";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import clsx from "clsx";

const TWEEN_FACTOR_BASE = 0.15;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: React.ReactNode[];
};

const DevCarousel: React.FC<PropType> = (props) => {
  const options: EmblaOptionsType = { loop: true };

  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );
  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setSelectedSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => logSlidesInView(emblaApi);
    const onReInit = () => {
      logSlidesInView(emblaApi);
      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);
    };
    const onScroll = () => tweenScale(emblaApi);
    const onSlideFocus = () => tweenScale(emblaApi);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("slideFocus", onSlideFocus);

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("slideFocus", onSlideFocus);
    };
  }, [emblaApi, logSlidesInView, setTweenNodes, setTweenFactor, tweenScale]);

  return (
    <>
      <div className="relative flex w-full gap-2 items-center">
        <DevButton
          asIcon
          className="md:flex hidden"
          rounded="full"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          <PiCaretLeftBold />
        </DevButton>
        <div
          className="overflow-hidden flex-grow [mask-image:_linear-gradient(to_right,_transparent_0,_white_50px,white_90%,_transparent_100%)] md:[mask-image:_linear-gradient(to_right,_transparent_0,_white_150px,white_calc(100%-150px),_transparent_100%)]"
          ref={emblaRef}
        >
          <div className="flex ">
            {slides.map((item, index) => (
              <div className="md:flex-[0_0_25%] flex-[0_0_80%]" key={index}>
                <div className="embla__slide__number flex-col text-center flex items-center justify-center gap-3 rounded-sm h-full">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <DevButton
          asIcon
          rounded="full"
          className="md:flex hidden"
          type="button"
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          <PiCaretRightBold />
        </DevButton>
      </div>
      <div className=" z-10 hidden items-center justify-center">
        {slides.map((_, index) => (
          <GoDotFill
            onClick={() => scrollTo(index)}
            key={index}
            className={clsx(
              "cursor-pointer transition-all duration-500 hover:text-accentNeon",
              index === selectedSlideIndex
                ? "text-accentNeon"
                : "text-rtlLight text-base"
            )}
          />
        ))}
      </div>
    </>
  );
};

export default DevCarousel;
