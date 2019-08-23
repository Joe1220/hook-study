import React, { useState } from "react";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content section 2"
  }
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div>
      {contents.map((content, index) => (
        <button onClick={() => changeItem(index)}>{content.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
