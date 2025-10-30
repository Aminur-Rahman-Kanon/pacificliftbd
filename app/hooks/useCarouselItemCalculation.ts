'use client';

import { useEffect, useState } from "react";
import useScreenWidth from "./useScreenWidth";

const useCarouselItemCalculation = (numberOfItems:number, element:HTMLElement | null) => {

    const width = useScreenWidth();

    const [itemWidth, setItemWidth] = useState(0);
    const [itemToDisplay, setItemToDisplay] = useState(numberOfItems);


    const handler = () => {
        if (width > 1400){
            const width = element?.getBoundingClientRect().width
            if (width){
                setItemWidth((width / numberOfItems) - 35)
                setItemToDisplay(numberOfItems);
            }
        }
        if (width <= 1400 && width > 767){
            setItemWidth((width / 3) - 35);
            setItemToDisplay(3);
        }

        if (width <= 767){
            setItemWidth(width - 50);
            setItemToDisplay(1);
        }
    }

    useEffect(() => {
        if (!element) return;

        if (!width) {
            handler();
        }

        handler();
    }, [width])

    return { itemWidth, itemToDisplay };
  
}

export default useCarouselItemCalculation
