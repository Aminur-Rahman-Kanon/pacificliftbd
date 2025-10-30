import { Hero } from "../types/productPageSkeleton"
import TextContainerType from "../types/textContainer"
import FeatureSectionGridLayoutType from "../types/featureSectionGridLayout"


export const hero: Hero = {
    heroTop: {
        img: '/images/products/modernization/passengerExperience/hero.jpg',
        heading: 'passenger experience'
    },
    heroBottom: {
        id: '1',
        heading: 'savor every journey',
        text: [
            'A richer experience in every way',
            'We never stop perfecting the elements that make elevator journeys more fulfilling. From clear stylish destination technology and contemporary aesthetics to advanced destination management and in-car technology, we want to inspire you on the move.'
        ]
    }
}


export const info: TextContainerType = {
    id: '1',
    heading: 'creating simplicity out of complexity',
    text: [
        'Ensuring a seamless passenger experience for vertical transportation at the dawn of the fourth industrial revolution',
        'A whitepaper by Stephen R. Nichols'
    ],
    link: {
        text: 'read whitepaper',
        href: '#'
    }
}

export const featureContainer1: FeatureSectionGridLayoutType = {
    id: '1',
    heading: 'compass 360',
    backgroundImg: '/images/products/modernization/passengerExperience/feature_1.jpg',
    imgPosition: 'left',
    text: [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa ab maiores, placeat nisi impedit deleniti cumque commodi nulla sequi nostrum! Eius pariatur molestiae unde ea possimus sequi modi quas.'
        }
    ],
    link: {
        text: 'explore compass 360',
        href: '#'
    }
}


export const featureContainer2: FeatureSectionGridLayoutType = {
    id: '2',
    heading: 'design that evokes',
    backgroundImg: '/images/products/modernization/passengerExperience/feature_2.jpg',
    imgPosition: 'right',
    text: [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa ab maiores, placeat nisi impedit deleniti cumque commodi nulla sequi nostrum! Eius pariatur molestiae unde ea possimus sequi modi quas.'
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia reprehenderit sequi sapiente nihil tempora quis, in asperiores dolores odit labore tenetur mollitia deserunt inventore perspiciatis, culpa alias similique eveniet eos? Libero iste aspernatur ipsum, fugiat autem nostrum et. Sint, deserunt ipsa voluptatem dolores iste, culpa doloribus laboriosam, omnis deleniti veniam repudiandae blanditiis reiciendis cumque quisquam velit aut ab exercitationem at.'
        }
    ],
    link: {
        text: 'explore aesthetics',
        href: '#'
    }
}