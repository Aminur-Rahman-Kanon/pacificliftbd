import HeroType from "@/app/types/hero"
import FeatureSectionGridLayoutType from "@/app/types/featureSectionGridLayout"

export const hero1:HeroType = {
    id: '1',
    header: 'signature service',
    backgroundImage: '/images/products/service/signature/hero_1.jpg',
    textContainer: [
        {
            id: '1',
            text: 'contact use to discuss your seri=vice requirement'
        }
    ],
    link: {
        href: '#',
        text: 'watch our service video'
    }
}


export const hero2:HeroType = {
    id: '2',
    header: 'Our teams are at your service',
    backgroundImage: '/images/products/service/signature/hero_2.jpg',
    textContainer: [
        {
            id: '1',
            text: 'Every day, our teams roll up their sleeves to keep two billion people on the move. We continue to invest in new tools and processes, so our highly trained mechanics and support teams can ensure a faster return to service. It’s all part of our commitment to moving the world more safely.'
        },

        {
            id: '2',
            text: 'Alongside our 24/7 OTISLINE® support team, our mechanics have a suite of digital support tools enabling expedited onsite maintenance and safe, comfortable rides.'
        }
    ]
}

export const hero3:HeroType = {
    id: '3',
    header: 'our commited teams are invested in the future of your elevators',
    backgroundImage: '/images/products/service/signature/hero_3.jpg',
    textContainer: [
        {
            id: '1',
            text: 'Every day, our teams roll up their sleeves to keep two billion people on the move. We continue to invest in new tools and processes, so our highly trained mechanics and support teams can ensure a faster return to service. It’s all part of our commitment to moving the world more safely, efficiently and reliably.'
        },
        {
            id: '2',
            text: 'Alongside our 24/7 OTISLINE® support team, our mechanics have a suite of digital support tools enabling expedited onsite maintenance and safe, comfortable rides.'
        }
    ]
}

export const featureSectionWithGridLayout1:FeatureSectionGridLayoutType = {
    id: '1',
    heading: 'no one knows your equipment like pacific lift',
    backgroundImg: '/images/products/service/signature/feature_1.jpg',
    imgPosition: 'left',
    text: [{
        id: '1',
        text: 'have your PL and non-PL units serviced by the largest elevator and escalator provider in the world'
    }],
    gridLayout: [
        {
            id: '1',
            img: '/images/products/service/signature/certified.png',
            text: 'certified OEM parts'
        },
        {
            id: '2',
            img: '/images/products/service/signature/construction.png',
            text: 'mechanic expertise & specialized roles'
        },
        {
            id: '3',
            img: '/images/products/service/signature/internet.png',
            text: 'regular software updates'
        },
        {
            id: '4',
            img: '/images/products/service/signature/technology.png',
            text: 'connected technologies'
        }
    ]
}

export const featureSectionWithGridLayout2:FeatureSectionGridLayoutType = {
    id: '1',
    heading: 'real time maintenance information',
    backgroundImg: '/images/products/service/signature/feature_2.jpg',
    imgPosition: 'right',
    text: [
        {
            id: '1',
            text: 'receive information on demand with our customer portal'
        },
        {
            id: '2',
            text: 'We are committed to being easy to do business with. That means giving you a single place to find all the information you need when you need it. With the customer portal, you can get a complete overview of your account, available 24/7. Contact our teams directly via phone or online request and track maintenance, performance and billing all in one place.'
        }
    ]
}
