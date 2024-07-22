import { useEffect } from "react";
import { gridToArray } from "../functions/gridToArray";
import { maxArr } from "../functions/maxArr";

export function useAnimation({ parentRef }) {
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const innerChild = Array.from(parent.children);
    if (innerChild.length === 0) return;

    const isnotGrid = window.getComputedStyle(parent).display !== "grid";

    innerChild.forEach(child => {
      //Definir wow en styles
      child.style.animation = "wow 200ms 1 ease-in-out";
      child.style.animationPlayState = "paused";
      child.style.transform = "scale(0)";
    });

    if (isnotGrid) {
      innerChild.forEach((child, index) => {
        child.style.animationDelay = `${index * 100}ms`;
      });
    } else {
      const numCols = window
        .getComputedStyle(parent)
        .getPropertyValue("grid-template-columns")
        .split(" ").length;

      const gridArray = gridToArray({ numCols, innerChild });
      const height = gridArray.length;
      const width = maxArr(gridArray.map((child) => child.length));
      const maxDimension = Math.max(width, height);

      for (let i = 0; i < maxDimension; i++) {
        for (let j = 0; j <= i; j++) {
          const col = i;
          const row = j;

          if (row < height && col < width && gridArray[row][col]) {
            const animationDelay = row + col;
            gridArray[row][col].style.animationDelay = `${animationDelay * 100}ms`;
          }
        }
      }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
          entry.target.addEventListener("animationend", () => {
            entry.target.style.transform = "scale(1)";
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    innerChild.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
