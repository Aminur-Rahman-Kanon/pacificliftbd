//import HeroWithTestContainer, 
//
import { Hero } from "@/app/types/productPageSkeleton";
import FeatureSectionGridLayoutType from "@/app/types/featureSectionGridLayout";


export const hero: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/highRiskSafety/hero.jpg',
        heading: 'high rise safety systems'
    },
    heroBottom: {
        id: '1',
        heading: 'Safety systems in a modern high-rise elevator',
        text: [
            'The Greek mathematician Archimedes is generally credited with creating the first elevator-like device in the third century B.C. But elevators only became a safe, reliable means of transportation for people after 1852 – the year Elisha Otis invented the elevator safety brake.',
            'An inspired piece of engineering, Otis’ safety brake kept the elevator from falling if the hoisting rope broke. If the rope went slack, the release of tension triggered the safety brake – a large leaf spring that snapped into notches cut into rails that supported the elevator on opposite sides of the elevator car.',
            'The safety systems in modern high-rise elevators are infinitely more advanced than Elisha Otis’ original device, incorporating sophisticated technologies developed over generations by engineers working in areas like advanced computing, sensor technology and materials science.',
            'Here’s a look at how these precision-engineered systems work – and why you should feel safe riding in a properly maintained elevator in one of today’s supertall buildings.'
        ]
    }
}

//data for featureSection without the interface
export const featureSection = {
    heading: 'key safety features',
    backgroundImg: '/images/toolsAndResources/highRiskSafety/diagram.jpg',
    textGroup1: [
        {
            id: '1',
            heading: 'the controller',
            text: 'Microprocessor-based controllers are the brains of the system, controlling all elevator functions based on data received from multiple subsystems, components and sensors.'
        },
        {
            id: '2',
            heading: 'the machine',
            text: 'The gearless machine consists of a motor, traction sheave and brake. The sheave drives the cables attached to the elevator car and counterweight. In a gearless traction machine, the drive sheave is an integral part of the motor.'
        },
        {
            id: '3',
            heading: 'the brakes',
            text: 'Modern elevators use friction brakes: a pair of shoes that apply equal and opposite pressure to a drum, pulley or disc mounted on the motor shaft. Springs apply the brake shoes to the pulley and are lifted electrically. If power is lost, the brake applies.'
        }
    ],
    textGroup2: [
        {
            id: '4',
            heading: 'the governors',
            text: 'The governor continuously monitors car speed. If the car exceeds its maximum rated speed, flyweights inside the governor spring outward, causing the governor to initiate action: first engaging the machine brake, then engaging the car'
        },
        {
            id: '5',
            heading: 'the saferies',
            text: 'Located on the elevator car itself, the safeties grab the hoistway rails when activated.'
        },
        {
            id: '6',
            heading: 'the buffer',
            text: 'Positioned at the bottom of the hoistway, buffers can absorb and dissipate the energy of a descending elevator.'
        }
    ]
}

