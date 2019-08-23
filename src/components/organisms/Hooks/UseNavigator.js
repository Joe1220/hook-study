import React, { useState, useEffect } from "react";

export const useNetwork = onChange => {
  // 내 웹이 온라인 혹은 오프라인 임을 보여준다.
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });
  return status;
};

export default () => {
  const handleNetworkChange = online => {
    console.log(online ? "We Just wen online" : "we are offline");
  };
  const online = useNetwork(handleNetworkChange);
  console.log("check online?", online);
  return (
    <div>
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};
