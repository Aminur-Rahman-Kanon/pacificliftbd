import { Hero } from "../types/productPageSkeleton";
import FeatureGridType from "../types/featureGrid";

export const hero: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/hero.jpg',
        heading: 'stay safe',
        link: {
            text: 'contact us',
            href: '#'
        }
    },
    heroBottom: {
        id: '1',
        heading: 'moving the world safely',
        text: [
            'As we continue to navigate these unprecedented times, Otis continues to innovate new products and safety features for our customers and passengers.',
            'We share these helpful tips and resources to effectively communicate to your building occupants and assist in smooth transitions back to building operations.'
        ]
    }
}

export const gridLayout: FeatureGridType[] = [
    {
        id: '1',
        img: '/images/toolsAndResources/grid_1.jpg',
        heading: 'guidelines',
        text: [
            'returning to occupancy'
        ],
        link: {
            text: 'read toolkit',
            href: '#'
        }
    },
    {
        id: '2',
        img: '/images/toolsAndResources/grid_2.jpg',
        heading: 'signae free resources',
        text: [
            'for lobby and elevators'
        ],
        link: {
            text: 'print and share',
            href: '#'
        }
    },
    {
        id: '3',
        img: '/images/toolsAndResources/grid_3.jpg',
        heading: 'compass resources',
        text: [
            'for compass customers'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '4',
        img: '/images/toolsAndResources/grid_4.jpg',
        heading: 'a big thank you',
        text: [
            'to frontline workers'
        ],
        link: {
            text: 'read more',
            href: '#'
        }
    },
    {
        id: '5',
        img: '/images/toolsAndResources/grid_5.jpg',
        heading: 'sanitizing products',
        text: [
            'for key touchpoints'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '6',
        img: '/images/toolsAndResources/grid_6.jpg',
        heading: 'purifying products',
        text: [
            'pacific lift air purifier'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '7',
        img: '/images/toolsAndResources/grid_7.jpg',
        heading: 'compass 360',
        text: [
            'to control traffic flow'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '8',
        img: '/images/toolsAndResources/grid_8.jpg',
        heading: 'eCall',
        text: [
            'coming soon to phones'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
]
