import React, { useState } from "react";

const App = () => {
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab1",
      title: "Title 1",
      content: "a",
    },
    {
      id: 2,
      tabTitle: "Tab2",
      title: "Title 2",
      content: "b",
    },
    {
      id: 3,
      tabTitle: "Tab3",
      title: "Title 3",
      content: "c",
    },
  ];

  const [activeTab, setActiveTab] = useState();

  const handleClick = (id) => {
    setActiveTab(id);
  };

  console.log(activeTab);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[700px] h-[500px] border border-black">
        <div className="flex justify-between h-15">
          {tabs.map((tab, i) => {
            return (
              <button
                key={tab.id}
                id={tab.id}
                className={
                  "p-2 m-2 w-full font-bold cursor-pointer bg-gradient-to-r from-slate-400 to-slate-700 " +
                  (activeTab === tab.id
                    ? "border border-b-orange-700 border-b-4"
                    : "")
                }
                onClick={() => handleClick(tab.id)}
              >
                {tab.tabTitle}
              </button>
            );
          })}
        </div>
        <div>
          {tabs.map((tab) => {
            return <div>{activeTab === tab.id && <p>{tab.title}</p>}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
