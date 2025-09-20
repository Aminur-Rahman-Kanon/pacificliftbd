'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './carousel.module.css';
import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { HeroSlides } from '@/app/types/heroSlides';

type Props = {
    slides: HeroSlides[]
}

const Carousel:React.FC<Props> = ({ slides }) => {

    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 })
    ]);

    const [ embla, setEmbla ] = useState<EmblaCarouselType | null>(null);
    const [scrollSnaps, setScollSnaps] = useState<number[] | undefined>([]);
    const [index, setIndex] = useState<number | undefined>(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi]);

    
    useEffect(() => {
        if (emblaApi){
            setEmbla(emblaApi);
        }

        setScollSnaps(emblaApi?.scrollSnapList());
        onSelect();
        emblaApi?.on('select', onSelect)
    }, [emblaApi, onSelect]);


    const scrollNext = useCallback(() => {
        embla?.scrollNext();
    }, [embla]);

    const scrollPrev = useCallback(() => {
        embla?.scrollPrev();
    }, [embla])

    if (!slides) return;
    
    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewPort} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {
                        slides.map(itm => <div key={itm.id} className={styles.emblaSlide}>
                            <div className={styles.bgContainer}>
                                <Image src={itm.img}
                                       alt='pacific lift bd'
                                       width={640}
                                       height={480}
                                       sizes='100%'
                                       className={styles.img} />
                            </div>

                            <div className={styles.banner}>
                                <h2 className={styles.headingMedium}>{itm.header}</h2>
                                <p className={styles.textNormal}>{itm.text}</p>
                                <button className={styles.bannerBtn}>View the Projects</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className={styles.pagination}>
                    {
                        scrollSnaps ? scrollSnaps.map((itm, idx) => <span key={idx}
                                                                    className={idx === index ? `${styles.bar} ${styles.active}` : styles.bar}>

                        </span>)
                        :
                        null
                    }
                </div>
            </div>
            <button onClick={scrollPrev} className={styles.btn}>‹</button>
            <button onClick={scrollNext} className={styles.btn}>›</button>
        </div>
    );
}

export default Carousel;
