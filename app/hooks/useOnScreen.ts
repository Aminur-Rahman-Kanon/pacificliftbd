import React, { useEffect, useState } from 'react'

export default function useOnScreen<T extends Element>(
    ref: React.RefObject<T | null>,
    threshold: number
)
: boolean
{
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting && entry.intersectionRatio >= threshold)
            }, {
                threshold
            }
        )

        observer.observe(ref.current);
    }, [ref, threshold])
    
    
    return isIntersecting;
}
