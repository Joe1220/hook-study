import React, { useEffect, useRef } from "react";

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (typeof onClick === "function") {
      if (current) {
        current.addEventListener("click", onClick);
      }
    }
    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  });
  return element;
};

export const useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (typeof onHover === "function") {
      if (current) {
        current.addEventListenr("mouseenter", onHover);
      }
    }
    return () => {
      if (current) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  });
  return element;
};

export default () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>hi</h1>
    </div>
  );
};
