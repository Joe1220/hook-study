import React from "react";

export const UsePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = false;
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default () => {
  const { enablePrevent, disablePrevent } = UsePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};
