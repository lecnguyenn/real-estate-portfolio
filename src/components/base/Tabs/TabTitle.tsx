interface TabTitleProps {
  title: string;
  index: number;
  selected: boolean;
  seletectedTab: (index: number) => void;
}

const TabTitle = ({ title, index, selected, seletectedTab }: TabTitleProps) => (
  <div
    className={`w-auto py-2 px-4 cursor-pointer
       ${selected ? 'text-white bg-[#16191e]' : 'text-[#16191e] bg-white'}
        text-[14px] rounded duration-[0.5]
       `}
    onClick={() => seletectedTab(index)}
  >
    {title}
  </div>
)

export default TabTitle;