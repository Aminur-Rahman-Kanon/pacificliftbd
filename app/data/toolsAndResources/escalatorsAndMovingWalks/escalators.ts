import FeatureSectionGridLayoutType from "@/app/types/featureSectionGridLayout";
import { Hero } from "@/app/types/productPageSkeleton";

export const hero1: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/escalatorsAndMovingWalks/hero_1.jpg',
        heading: 'escalaotrs and moving walks',
        text: "Whether it’s our passengers, our customers or our colleagues, we put people at the center of everything we do",
        link: {
            text: 'contact us',
            href: '#'
        }
    }
}

export const hero2: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/escalatorsAndMovingWalks/hero_2.jpg',
        heading: 'escalator modernization',
        text: 'Upgrade your escalator. Improve safety, reliability and style.',
        link: {
            text: 'request more information',
            href: '#'
        }
    }
}

export const featuteSection: FeatureSectionGridLayoutType = {
    id: '1',
    backgroundImg: '/images/toolsAndResources/escalatorsAndMovingWalks/feature_4.jpg',
    imgPosition: 'left',
    heading: 'sustainable products',
    text: [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem qui sed provident adipisci quae assumenda corrupti dolor itaque architecto atque ut ipsum corporis quasi minima dolore, quisquam incidunt aperiam? Vel, quaerat. Ea praesentium, autem, ipsum tempora in sunt eveniet, reiciendis velit sapiente tempore error! Itaque assumenda beatae facere in error aspernatur voluptate quaerat, maiores nisi sed repellat ex neque!'
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem qui sed provident adipisci quae assumenda corrupti dolor itaque architecto atque ut ipsum corporis quasi minima dolore, quisquam incidunt aperiam? Vel, quaerat. Ea praesentium, autem, ipsum tempora in sunt eveniet, reiciendis velit sapiente tempore error! Itaque assumenda beatae facere in error aspernatur voluptate quaerat, maiores nisi sed repellat ex neque!'
        }
    ],
    link: {
        text: 'see our EPDs',
        href: '#'
    }
}

export const hero3: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/escalatorsAndMovingWalks/hero_3.jpg',
        heading: 'the beauty of design',
        text: 'Gone are the days of being hidden from view; today’s escalators and moving walks take pride of place in public and commercial spaces. They help define the way people experience these buildings.'
    },
    heroBottom: {
        id: '1',
        heading: 'At the forefront of safe, reliable technology',
        text: [
            'From design to manufacturing, we strive to keep you safe and moving.'
        ]
    }
}