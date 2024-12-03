"use client"

import { useState } from "react";

import TabTitle from "./TabTitle";

interface TabsProps {
  children: React.ReactElement[];
}

const Tabs = ({ children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div className="flex justify-center mt-5 mb-8 ">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            selected={selectedTab === index}
            seletectedTab={setSelectedTab}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  )

}

export default Tabs;