import { Hero } from "../types/productPageSkeleton";
import FeatureGridType from "../types/featureGrid";

export const hero: Hero = {
    heroTop: {
        img: '/images/products/modernization/improvedAesthetics/hero.jpg',
        heading: 'improved aesthetics'
    },
    heroBottom: {
        id: '1',
        heading: 'aesthetics for your elevator',
        text: [
            'From rich textures to classical materials our exclusive design packages will enhance the experience for every passenger, every day. With an almost unlimited design flexibility of more than 400,000 custom options, creativity knows no boundaries.'
        ]
    }
}

export const featuresGrid: FeatureGridType[] = [
    {
        id: '1',
        img: '/images/products/modernization/improvedAesthetics/feature_1.jpg',
        heading: 'low-rise elevators',
        link: {
            text:'learn more',
            href: '/products/product/low-rise-elevator'
        }
    },
    {
        id: '2',
        img: '/images/products/modernization/improvedAesthetics/feature_2.jpg',
        heading: 'mid-rise elevators',
        link: {
            text:'learn more',
            href: '/products/product/mid-rise-elevator'
        }
    },
    {
        id: '3',
        img: '/images/products/modernization/improvedAesthetics/feature_1.jpg',
        heading: 'high-rise elevators',
        link: {
            text:'learn more',
            href: '/products/product/high-rise-elevator'
        }
    },
    {
        id: '4',
        img: '/images/products/modernization/improvedAesthetics/feature_4.jpg',
        heading: 'escalators and moving walks',
        link: {
            text:'learn more',
            href: '/products/product/escalator-and-moving-walks'
        }
    },
]