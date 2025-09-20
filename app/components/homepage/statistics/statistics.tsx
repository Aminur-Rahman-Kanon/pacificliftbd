'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './statistics.module.css';
import useOnScreen from '@/app/hooks/useOnScreen';
import { Smile, Hotel, Drill } from 'lucide-react';

const completedProjectAmount = 20;
const servicedAmount = 17;
const customerAmount = 25;

const Statistics = () => {
    
    const statisticsRef = useRef<HTMLDivElement | null>(null);

    const hasFinishedExecution = useRef<boolean>(false);
    
    const isIntersecting = useOnScreen(statisticsRef, 0.7);

    const [completedProject, setCompletedProject] = useState(0);

    const [serviced, setServiced] = useState(0);

    const [customer, setCustomer] = useState(0);
    
    useEffect(() => {
        
        if (isIntersecting && !hasFinishedExecution.current) {
            const timeOutIds: number[] = [];

            hasFinishedExecution.current = true;

            for (let i=0; i<completedProjectAmount; i++){
                const id = window.setTimeout(() => {
                    setCompletedProject((completedProject) => completedProject += 1)
                }, 100 * (i+1));

                timeOutIds.push(id);
            }

            for (let i=0; i<servicedAmount; i++){
                const id = window.setTimeout(() => {
                    setServiced((serviced) => serviced += 1);
                }, 100 * (i+1));

                timeOutIds.push(id);
            }

            for (let i=0; i<customerAmount; i++){
                const id = window.setTimeout(() => {
                    setCustomer((customer) => customer += 1);
                }, 100 * (i+1));

                timeOutIds.push(id);
            }
        }
    }, [isIntersecting]);

    return (
        <div className={styles.statistics} ref={statisticsRef}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Hotel size={65} color='white'/>
                    <h2 className={styles.headingLarge}>Finished Proects</h2>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.counter}>{completedProject}</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.top}>
                    <Drill size={65} color='white' />
                    <h2 className={styles.headingLarge}>Units Serviced</h2>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.counter}>{serviced}</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.top}>
                    <Smile size={65} color='white' />
                    <h2 className={styles.headingLarge}>Happy Customer</h2>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.counter}>{customer}</span>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
