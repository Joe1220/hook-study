import React from "react";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default () => {
  const deleteWorld = () => console.log("deleting the world...");
  const cancelWorld = () => console.log("cancel the world...");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, cancelWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
