import React from 'react';
import styles from './page.module.css';
import { hero, featureSection } from '@/app/data/toolsAndResources/highRiskSafety/highRiskSafety';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import Image from 'next/image';

const Page = () => {
    return (
        <section className={styles.highRiskSafety}>
            <HeroWithTextContainer hero={hero} />
            {/*feature section with grid layout*/}
            <div className={styles.gridLayout}>
                <div className={styles.gridItem}>
                    <div className={styles.textGroup}>
                        {
                            featureSection.textGroup1.map(txtGrp => <div key={txtGrp.id} className={styles.textGroupItem}>
                                <div className={styles.textGroupTop}>
                                    <span className={styles.circleCounterDisplay}>{txtGrp.id}</span>
                                    <h4 className={styles.headingSmall}>{txtGrp.heading}</h4>
                                </div>
                                <div className={styles.textGroupBottom}>
                                    <p className={styles.textSmall}>{txtGrp.text}</p>
                                </div>
                            </div>
                            )
                        }        
                    </div>

                </div>
                <div className={styles.gridItem}>
                    <div className={styles.staticImgContainer}>
                        <Image src={'/images/toolsAndResources/highRiskSafety/diagram_2.jpg'}
                                alt='lift mechanism'
                                fill
                                className={styles.staticImg} />
                    </div>
                </div>
                
                <div className={styles.gridItem}>
                    <div className={styles.textGroup}>
                        {
                            featureSection.textGroup2.map(txtGrp => <div key={txtGrp.id} className={styles.textGroupItem}>
                                <div className={styles.textGroupTop}>
                                    <span className={styles.circleCounterDisplay}>{txtGrp.id}</span>
                                    <h4 className={styles.headingSmall}>{txtGrp.heading}</h4>
                                </div>
                                <div className={styles.textGroupBottom}>
                                    <p className={styles.textSmall}>{txtGrp.text}</p>
                                </div>
                            </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>

            {/*feature section*/}
            <div className={styles.flexLayout}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/toolsAndResources/highRiskSafety/feature_1.jpg'}
                           alt='sample scenario'
                           width={640}
                           height={420}
                           sizes='100%'
                           className={styles.img}/>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.headingMedium}>sample scenario</h2>
                    <p className={styles.textNormal}>
                        In describing the safety system in today’s high-rise elevators, engineers talk about a safety chain. It’s a metaphor that turns the familiar proverb on its head. One break in the chain and the elevator stops until the issue is resolved. This constitutes its strength.
                    </p>

                    <p className={styles.textNormal}>
                        Suppose an elevator exceeds its rated speed by a certain percentage: a link in the safety chain has been opened, triggering the control system to safely stop the elevator.
                    </p>

                    <p className={styles.textNormal}>
                        In this case, the elevator’s sensors communicate the increase in speed to the controller, which initially modifies current to the machine to slow down the elevator. At this point, the machine brake hasn’t been applied. The machine itself is slowing down the elevator. The process is similar to downshifting in an automobile with a manual transmission instead of stepping on the brake.
                    </p>

                    <p className={styles.textNormal}>
                        If modifying current to the machine doesn’t slow the elevator enough, the controller then removes all power from the machine and applies the machine brake, slowing the elevator further. The safety system is designed (per applicable codes) to bring the elevator to a controlled stop.
                    </p>
                    <p className={styles.textNormal}>
                        If the elevator continues to accelerate – or overspeed in engineering jargon –the governor is the next component in the safety hierarchy to be activated.
                    </p>
                    <p className={styles.textNormal}>
                        The governor is a speed-sensing device mounted in the machine room. It has its own pulley, moved by a steel cable (the governor rope) that is attached to the elevator car – meaning it moves at the same speed as the elevator. If the governor spins too fast, flyweights inside the governor spring outward, tripping a device that grabs the governor rope.
                    </p>
                    <p className={styles.textNormal}>
                        The now-motionless governor rope pulls on the safeties – essentially emergency brakes on the car itself – and engages them. The safeties clamp onto the hoistway rails, bringing the elevator to a safe stop.
                    </p>
                    <p className={styles.textNormal}>
                        These safeties are the modern version of Elisha Otis’ original safety brake.
                    </p>
                    <p className={styles.textNormal}>
                        Buffers come into play if the other braking components don’t have enough time to bring the elevator to a complete stop by the time the elevator reaches the bottom of the hoistway. They slow the car to a stop, acting like giant automotive shock absorbers.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Page
