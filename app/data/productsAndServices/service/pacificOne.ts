import CardGridType from "@/app/types/cardGrid"
import CustomCarouselType from "@/app/types/customCarousel"
import FeatureGrid from "@/app/types/featureGrid"
import { Hero } from "@/app/types/productPageSkeleton"

export const hero1: Hero = {
    heroTop: {
        img: '/images/products/service/one/hero_1.jpg',
        heading: 'pacific lift one',
        text: 'feel limited',
        link: {
            text: 'contact us',
            href: '#'
        }
    },
    heroBottom: {
        id: '1',
        heading: 'a new level of connectivity',
        text: [
            'pacific lift ONE is our IoT solution that connects your elevator to the cloud to deliver a seamless passenger experience.',
            'From real-time data insights to remote monitoring, enhance your building’s performance with one of our three Otis ONE maintenance packages'
        ]
    }
}

export const featureGrid:FeatureGrid[] = [
    {
        id: '1',
        img: '/images/products/service/one/clock.png',
        heading: 'real time transparent information'
    },
    {
        id: '2',
        img: '/images/products/service/one/chat.png',
        heading: 'proactive communication and predictive insights'
    },
    {
        id: '3',
        img: '/images/products/service/one/worker.png',
        heading: 'fast and reliable remote services'
    },
    {
        id: '4',
        img: '/images/products/service/one/passenger.png',
        heading: 'informed passengers'
    },
    {
        id: '5',
        img: '/images/products/service/one/touch.png',
        heading: 'connects to customer APIs'
    }
]

export const hero2: Hero = {
    heroTop: {
        img: '/images/products/service/one/hero_2.jpg',
        heading: 'a new level of connectivity'
    }
}

export const carouselGrid: CustomCarouselType = {
    id: '1',
    carousel: [
        {
            id: '1',
            img: '/images/products/service/one/laptop.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '2',
            img: '/images/products/service/one/like.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '3',
            img: '/images/products/service/one/wrench.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },{
            id: '4',
            img: '/images/products/service/one/clock.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '5',
            img: '/images/products/service/one/chat.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '6',
            img: '/images/products/service/one/passenger.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '7',
            img: '/images/products/service/one/chat.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        },
        {
            id: '8',
            img: '/images/products/service/one/passenger.png',
            text: 'we subscribed to pacific lift api digital service to integrate elevator availability, maintenance insights, and traffic per floor data in our own building management system from the pacific lift developer portal'
        }
    ],
    link: {
        text: 'read more mechanic stories',
        href: '#'
    }
}

export const cardGrid: CardGridType[] = [
    {
        id: '1',
        backgroundImg: '/images/products/service/one/cardGrid_1.jpg',
        heading: 'Pacific Lift eCall',
        text: 'Your personal elevator button. You can use the eCall app to call an elevator from your smart devices.',
        link: {
            text: 'Explore Pacific Lift eCall',
            href: '#'
        }
    },
    {
        id: '2',
        backgroundImg: '/images/products/service/one/cardGrid_2.jpg',
        heading: 'Pacific Lift Developer Portal',
        text: 'Access data stored securely in the Otis cloud. The Otis API platform sends elevator performance data directly into your own system.',
        link: {
            text: 'Explore Pacific Developer Portal',
            href: '#'
        }
    },
    {
        id: '3',
        backgroundImg: '/images/products/service/one/cardGrid_3.jpg',
        heading: 'Pacific Lift Integrated Dispatch',
        text: 'This cloud-based or on-premise API solution enables the integration of service robots with Otis elevators.',
        link: {
            text: 'Explore Pacific Integrated Dispatch',
            href: '#'
        }
    },
]
