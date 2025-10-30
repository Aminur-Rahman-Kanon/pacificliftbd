import { Hero } from "@/app/types/productPageSkeleton";
import FeatureSectionGridLayoutType from "@/app/types/featureSectionGridLayout";
import FeatureGridType from "@/app/types/featureGrid";

export const hero: Hero = {
    heroTop: {
        img: '/images/products/modernization/upgrades/hero.jpg',
        heading: 'improving your investment',
        link: {
            text: 'request a quote',
            href: '#'
        }
    }
}

export const featureSection: FeatureSectionGridLayoutType = {
    id: '1',
    backgroundImg: '/images/products/modernization/upgrades/feature_1.jpg',
    imgPosition: 'left',
    heading: 'advancing accessibility with pacific lift',
    text: [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores distinctio nam eveniet ex minima impedit ea sit ipsam aspernatur sequi, eum numquam? Quaerat explicabo consequatur vel minima sit ratione. Possimus!'
        }
    ],
    link: {
        text: 'read accessibility fact sheet',
        href: '#'
    }
}

export const gridLayout: FeatureGridType[] = [
    {
        id: '1',
        img: '/images/products/modernization/upgrades/feature_2.jpg',
        heading: 'glide a door operator',
        text: [
            'For all elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '2',
        img: '/images/products/modernization/upgrades/feature_3.jpg',
        heading: 'energy efficiency',
        text: [
            'For all elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '3',
        img: '/images/products/modernization/upgrades/feature_4.jpg',
        heading: 'fixtures',
        text: [
            'For all elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '4',
        img: '/images/products/modernization/upgrades/feature_5.jpg',
        heading: 'hydraulic power units',
        text: [
            'for hydraulic elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '5',
        img: '/images/products/modernization/upgrades/feature_6.jpg',
        heading: 'safety',
        text: [
            'For all elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    },
    {
        id: '6',
        img: '/images/products/modernization/upgrades/feature_7.jpg',
        heading: 'solid state starter',
        text: [
            'For all elevators'
        ],
        link: {
            text: 'learn more',
            href: '#'
        }
    }
]
