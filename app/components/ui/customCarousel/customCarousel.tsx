'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './customCarousel.module.css';
import CustomCarouselType from '@/app/types/customCarousel';
import { carouselGrid } from '@/app/data/pacificOne';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useCarouselItemCalculation from '@/app/hooks/useCarouselItemCalculation';

type Props = {
    item: CustomCarouselType,
    itemToDisplayPerSlides: number
}

const CustomCarousel:React.FC<Props> = ({ item, itemToDisplayPerSlides }) => {

    
    const [index, setIndex] = useState(0);
    
    const [carouselElement, setCarouselElement] = useState<HTMLElement | null>(null);

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    
    const { itemWidth, itemToDisplay } = useCarouselItemCalculation(itemToDisplayPerSlides, carouselElement);

    useEffect(() => {
        const el = document.getElementById('carousel-container');
        if (el){
            setCarouselElement(el);
        }
    }, [])

    if (!item) return;

    const totalSlides = item.carousel.length ? Math.ceil(item.carousel.length / itemToDisplay) : 0;

    const nextBtnHandler = () => {
        const carousel = document.getElementById('carousel-container');

        if (!carousel) return;

        if (index+1 >= totalSlides) return;

        const scrollAmount = itemToDisplay * (itemWidth + 35)
        setIndex((index) => index += 1);
        carousel.scrollBy({ left:  scrollAmount, behavior: 'smooth' });
    };

    const prevBtnHandler = () => {
        const carousel = document.getElementById('carousel-container');

        if (!carousel) return;

        if (index <= 0) return;

        const scrollAmount = itemToDisplay * (itemWidth + 35)
        setIndex((index) => index -= 1);
        carousel.scrollBy({ left: - scrollAmount, behavior: 'smooth' })
    };

    const onTouchStart = (e:React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
        touchEndX.current = null;
    }

    const onTouchMove = (e:React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    }

    const onTouchEnd = () => {
        const el = document.getElementById('carousel-container');
        if (!el) return;
        
        const scrollableDistance = itemWidth * itemToDisplay;
        const scrollWidth = el.scrollLeft;

        if (scrollWidth > scrollableDistance){
            setIndex(index => index += 1);
        }
        // if (scrollWidth < sc) {
        //     setIndex(index => index -= 1);
        // }
    }

    console.log(itemWidth);
    console.log(itemToDisplay);


    return (
        <section className={styles.customCarousel}>
            <div className={styles.carouselContainer}
                 id='carousel-container'
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}>
                {
                    carouselGrid.carousel.map(itm => <div key={itm.id} className={styles.item} style={{ width: itemWidth }}>
                        <div className={styles.iconContainer}>
                            <Image src={itm.img}
                                    alt='text'
                                    width={80}
                                    height={80}
                                    sizes='100%'
                                    className={styles.icon} />
                        </div>

                        <p className={styles.textNormal}>&quot;{itm.text}&quot;</p>
                    </div>)
                    }
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.btn}
                        onClick={prevBtnHandler}
                        disabled={index <= 0} >
                    <ChevronLeft size={20} color='black'/>
                </button>

                <button className={styles.btn}
                        onClick={nextBtnHandler}
                        disabled={index+1 >= totalSlides}>
                    <ChevronRight size={20} color='black'/>
                </button>
            </div>

            <div className={styles.pagination}>
                {
                    Array.from(Array(totalSlides)).map((pag, idx) => <span key={idx}
                                                                           className={index === idx ? `${styles.pagBtn} ${styles.active}` : styles.pagBtn}>
    </span>) 
                }
            </div>
        </section>

    )
}

export default CustomCarousel
