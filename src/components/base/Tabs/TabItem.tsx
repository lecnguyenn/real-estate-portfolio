import { ReactNode } from "react";

interface TabItemProp {
  title: string;
  children: ReactNode;
}

const TabItem = ({title, children }: TabItemProp) => (
  <div className="w-full mb-5" title={title}>{children}</div>
)

export default TabItem;