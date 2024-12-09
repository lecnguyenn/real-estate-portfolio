"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';


export interface AccordionData {
    title: string;
    content: React.ReactNode;
}
interface AccordionProps {
    data: AccordionData;
    isOpen: boolean;
    onClick: () => void;
}

interface ItemProps {
    items: AccordionData[];
}
const AccordionItem = ({ data, isOpen, onClick }: AccordionProps) => {
    const [height, setHeight] = useState(0);
    const contentEl = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (isOpen) {
            if (contentEl.current) {
                setHeight(contentEl.current.scrollHeight + 25);
            }
        } else {
            setHeight(0);
        }
    }, [isOpen])

    return (
        <div className="w-full rounded-[5px] border border-[hsla(0,0%,93%,.5)] bg-[#faf8fb] mb-[15px]">
            <div className='flex justify-between py-[15px] pl-[25px] pr-[15px] transition-transform duration-300 ease-in-out' onClick={onClick}>
                <h1 className="text-[15px] text-[#16191e] font-semibold leading-[1.4]">{data.title}</h1>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div ref={contentEl}
                className='
            overflow-hidden text-[15px]
             text-[#5e5e5e] text-left
            leading-[28px] pt-0 px-[25px]
             transition-all 
              duration-300 
              ease-in-out '
                style={{ height }}
            >
                {data.content}
            </div>
        </div>
    )
}

const Accordion = ({ items }: ItemProps) => {
    const [currentId, setCurrentId] = useState(-1);

    const handleClick = (index: number) => {
        setCurrentId((currentValue) => currentValue !== index ? index : -1)
    }
    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    data={item}
                    isOpen={index === currentId}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordion;