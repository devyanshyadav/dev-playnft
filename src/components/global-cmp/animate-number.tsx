"use client";
import React, { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

const AnimateNumber = ({ number }: { number: number }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    // Set a 2-second delay before starting the animation
    const delayTimer = setTimeout(() => {
      setIsAnimationReady(true);
    }, 2000);

    // Cleanup the timer if component unmounts
    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    // Only start animation if delay is complete and number is not 0
    if (!isAnimationReady || number === 0) {
      if (number === 0) setCurrentNumber(0);
      return;
    }

    // Determine the step size based on the total number
    // This ensures the animation takes a reasonable amount of time
    const stepSize = Math.max(1, Math.floor(number / 50));

    const intervalId = setInterval(() => {
      setCurrentNumber((prev) => {
        // If we're close to the target, set to exact number and clear interval
        if (Math.abs(prev - number) <= stepSize) {
          clearInterval(intervalId);
          return number;
        }

        // Increment or decrement based on current vs target
        return prev < number
          ? Math.min(prev + stepSize, number)
          : Math.max(prev - stepSize, number);
      });
    }, 20); // Update every 20ms for smooth animation

    // Cleanup interval on component unmount or number change
    return () => clearInterval(intervalId);
  }, [number, isAnimationReady]);

  return <NumberFlow value={currentNumber} suffix="k" />;
};

export default AnimateNumber;
