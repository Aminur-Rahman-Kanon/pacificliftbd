import { Hero } from "@/app/types/productPageSkeleton";
import SimpleGridLayoutType from "@/app/types/simpleGridLayout";
import FeatureSectionGridLayoutType from "@/app/types/featureSectionGridLayout";
import { Shield, SlidersVertical, Grid2X2Plus, Leaf, HardHat, Gem, Trophy, Award } from 'lucide-react';

export const hero: Hero = {
    heroTop: {
        img: '/images/products/modernization/hero.jpg',
        heading: 'is your elevator tired? we can help',
    },
    heroBottom: {
        id: '1',
        heading: 'why consider an elevator modernization',
        text: [
            'With an elevator modernization, passengers will benefit from updated technologies that enhance safety, improve performance and reliability, and boost sustainability.',
            'Investing in an elevator modernization today allows building owners and managers to minimize the unexpected while bringing passenger experience to the next level.'
        ]
    }
}

export const simpleGridLayout: SimpleGridLayoutType = {
    id: '1',
    heading: 'The benefits of elevator modernization with pacific lift',
    gridItems: [
        {
            id: '1',
            icon: Shield,
            heading: 'enhance safety',
            text: 'Upgrade your system to the latest safety standards and regulations. At Otis, safety is always first.'
        },
        {
            id: '2',
            icon: SlidersVertical,
            heading: 'improve performance and reliability',
            text: 'Minimize shutdowns and increase the availability of your elevator. With Otis, you gain access to cutting-edge and connected solutions.'
        },
        {
            id: '3',
            icon: Grid2X2Plus,
            heading: 'minimize the unexpected',
            text: 'Control the pace, cost and planning of your project thanks to our proven experience.'
        },
        {
            id: '4',
            icon: Leaf,
            heading: 'boost sustainaility',
            text: 'Manage your impact on the environment by increasing efficiency and reducing energy consumption thanks to our wide range of packages tailored to your buildings’ needs.'
        },
        {
            id: '5',
            icon: HardHat,
            heading: 'bring passenger experience to the next level',
            text: 'Increase the appeal of your property and provide shorter waiting times and more comfortable, accessible, connected journeys thanks to our wide range of comtemporary aesthetics and advanced technologies.'
        }
    ]
}

export const prime: FeatureSectionGridLayoutType = {
    id: '1',
    heading: 'prime',
    backgroundImg: '/images/products/modernization/feature_1.jpg',
    imgPosition: 'left',
    text: [
        {
            id: '1',
            text: 'This package includes the replacement of the elevator’s  control system and fixtures.'
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid maiores odit molestias reiciendis aliquam numquam ullam fuga placeat illo ad eos debitis neque voluptatum, exercitationem illum minus nihil? Voluptatem.'
        }
    ]

}

export const plus: FeatureSectionGridLayoutType = {
    id: '2',
    heading: 'plus',
    backgroundImg: '/images/products/modernization/feature_2.jpg',
    imgPosition: 'right',
    text: [
        {
            id: '1',
            text: 'In addition to the control system, this package includes the replacement of the traction system.'
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid maiores odit molestias reiciendis aliquam numquam ullam fuga placeat illo ad eos debitis neque voluptatum, exercitationem illum minus nihil? Voluptatem.'
        }
    ]
}

export const pro: FeatureSectionGridLayoutType = {
    id: '3',
    heading: 'pro',
    backgroundImg: '/images/products/modernization/feature_3.jpg',
    imgPosition: 'left',
    text: [
        {
            id: '1',
            text: 'With this package, we install most of the key components available on new equipment into your elevator, with minimal disruption and the ability to keep the landing door system.'
        },
        {
            id: '2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid maiores odit molestias reiciendis aliquam numquam ullam fuga placeat illo ad eos debitis neque voluptatum, exercitationem illum minus nihil? Voluptatem.'
        }
    ]
}

