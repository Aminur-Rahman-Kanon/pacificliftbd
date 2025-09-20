import NavItemType from "../types/navItem";
import { faBox, faBuilding, faWrench } from '@fortawesome/free-solid-svg-icons';

const nestedNavItem: NavItemType[] = [
    {
        id: 1,
        icon: {
            icon: faBox,
            color: 'white',
            size: '3x'
        },
        heading: 'products & services',
        child: [
            {
                id: 1,
                heading: 'by products',
                elements: [
                    {
                        id: 1,
                        href: '/low-rise-elevators',
                        tag: 'low-rise elevators'
                    },
                    {
                        id: 2,
                        href: '/mid-rise-elevators',
                        tag: 'mid-rise elevators'
                    },
                    {
                        id: 3,
                        href: '/high-rise-elevators',
                        tag: 'high-rise elevators'
                    },
                    {
                        id: 4,
                        href: '/escalators & moving walks',
                        tag: 'escalators & moving walks'
                    },
                    {
                        id: 5,
                        href: '/dispatching',
                        tag: 'dispatching'
                    },
                    {
                        id: 6,
                        href: '/our awards & honors',
                        tag: 'our awards & honors'
                    },
                    {
                        id: 7,
                        href: 'EPDs',
                        tag: 'EPDs'
                    }
                ]
            },

            {
                id: 2,
                heading: 'by industry',
                elements: [
                    {
                        id: 1,
                        href: '/residential',
                        tag: 'residential'
                    },
                    {
                        id: 2,
                        href: '/retail',
                        tag: 'retail'
                    },
                    {
                        id: 3,
                        href: '/office',
                        tag: 'office'
                    },
                    {
                        id: 4,
                        href: '/hospital',
                        tag: 'hospital'
                    },
                    {
                        id: 5,
                        href: '/hotel',
                        tag: 'hotel'
                    },
                    {
                        id: 6,
                        href: '/multi-use-building',
                        tag: 'multi-use-building'
                    },
                    {
                        id: 7,
                        href: '/infrastructure',
                        tag: 'infrastructure'
                    },
                    {
                        id: 8,
                        href: '/global project',
                        tag: 'global project'
                    }
                ]
            },

            {
                id: 3,
                heading: 'service',
                elements: [
                    {
                        id: 1,
                        href: '/pacific-lift-bd-signature-service',
                        tag: 'pacific lift BD signature service'
                    },
                    {
                        id: 2,
                        href: '/pacific-lift-bd-one',
                        tag: 'pacific lift BD one'
                    },
                    {
                        id: 3,
                        href: '/new-elevator-warranty-manual',
                        tag: 'new elevator warranty manual'
                    },
                    {
                        id: 4,
                        href: '/service contract selector',
                        tag: 'service contract selector'
                    }
                ]
            },

            {
                id: 4,
                heading: 'modernization & upgrades',
                elements: [
                    {
                        id: 1,
                        href: '/modernization',
                        tag: 'modernization'
                    },
                    {
                        id: 2,
                        href: '/passenger-experience',
                        tag: 'passenger experience'
                    },
                    {
                        id: 3,
                        href: '/improves aesthetics',
                        tag: 'improved aesthetics'
                    },
                    {
                        id: 4,
                        href: '/upgrades & replacement',
                        tag: 'upgrades & replacement'
                    },
                    {
                        id: 5,
                        href: '/health & safety product',
                        tag: 'health & safety product'
                    },
                    {
                        id: 6,
                        href: '/elevator management system',
                        tag: 'elevator management system'
                    }
                ]
            },

            {
                id: 5,
                heading: 'hotline',
                elements: [
                    {
                        id: 1,
                        href: 'tel:008801913777565',
                        tag: '+8801913777565'
                    },
                    {
                        id: 2,
                        href: 'mailto:kanon754@gmail.com',
                        tag: 'pacificliftbd@gmail.com'
                    }
                ]
            },
            
        ]
    },

    {
        id: 2,
        icon: {
            icon: faWrench,
            size: '3x',
            color: 'white'
        },
        heading: 'tools & resources',
        child: [
            {
                id: 1,
                heading: 'architects / engineers',
                elements: [
                    {
                        id: 1,
                        href: '/pacific-lif-bd-create',
                        tag: 'pacific lift BD create'
                    },
                    {
                        id: 2,
                        href: '/bim-create',
                        tag: 'BIM create'
                    },
                    {
                        id: 3,
                        href: '/aia',
                        tag: 'AIA'
                    }
                ]
            },
            {
                id: 2,
                heading: 'contractors / developers',
                elements: [
                    {
                        id: 1,
                        href: '/dispatching',
                        tag: 'dispatching'
                    },
                    {
                        id: 2,
                        href: '/high-risk-safety',
                        tag: 'high risk safety'
                    },
                    {
                        id: 3,
                        href: '/earthquake-protection',
                        tag: 'earthquake protection'
                    },
                    {
                        id: 4,
                        href: '/safety resources',
                        tag: 'safety resources'
                    },
                    {
                        id: 5,
                        href: '/elevator-products',
                        tag: 'elevator products'
                    },
                    {
                        id: 6,
                        href: '/excalators-and-moving-walks',
                        tag: 'escalators & moving walks'
                    }
                ]
            },
            {
                id: 3,
                heading: 'property managers',
                elements: [
                    {
                        id: 1,
                        href: '/improved-aesthetics',
                        tag: 'improves aesthetics'
                    },
                    {
                        id: 2,
                        href: '/modernization',
                        tag: 'modernization'
                    },
                    {
                        id: 3,
                        href: '/pacific-lift-bd-signature-service',
                        tag: 'pacific lift BD signature service'
                    },
                    {
                        id: 4,
                        href: '/upgrades-and-replacements',
                        tag: 'upgrades & replacements'
                    },
                    {
                        id: 5,
                        href: '/elevator-management-system',
                        tag: 'elevator management system'
                    },
                    {
                        id: 6,
                        href: '/pacific-lift-bd-integrated dispatch',
                        tag: 'pacific lift BD integrated dispatch'
                    },
                    {
                        id: 7,
                        href: '/safety-products-and-features',
                        tag: 'safety products & features'
                    },
                    {
                        id: 8,
                        href: '/lockout-tagout-policy',
                        tag: 'lockout tagout policy'
                    },
                    {
                        id: 9,
                        href: '/mechanical-energy-policy',
                        tag: 'mechanical energy policy'
                    },
                    {
                        id: 10,
                        href: '/building-management-api',
                        tag: 'building management api'
                    }
                ]
            },
            {
                id: 4,
                heading: 'passengers',
                elements: [
                    {
                        id: 1,
                        href: '/newsroom',
                        tag: 'newsroom'
                    },
                    {
                        id: 2,
                        href: '/passenger-experience',
                        tag: 'passenger experience'
                    },
                    {
                        id: 3,
                        href: '/elevator-safety',
                        tag: 'elevator safety'
                    },
                    {
                        id: 4,
                        href: '/escalator-safety',
                        tag: 'escalator safety'
                    }
                ]
            },
            {
                id: 5,
                heading: 'hotline',
                elements: [
                    {
                        id: 1,
                        href: 'tel:008801913777565',
                        tag: '+8801913777565'
                    },
                    {
                        id: 2,
                        href: 'mailto:kanon754@gmail.com',
                        tag: 'pacificliftbd@gmail.com'
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        icon: {
            icon: faBuilding,
            size: '3x',
            color: 'white'
        },
        heading: 'our company',
        child: [
            {
                id: 1,
                heading: 'who we are',
                elements: [
                    {
                        id: 1,
                        href: '/about-us',
                        tag: 'about us'
                    },
                    {
                        id: 2,
                        href: '/innovation',
                        tag: 'innovation'
                    },
                    {
                        id: 3,
                        href: '/leadership',
                        tag: 'leadership'
                    },
                    {
                        id: 4,
                        href: '/board-of-directors',
                        tag: 'board of directors'
                    }
                ]
            },
            {
                id: 2,
                heading: 'what we stand for',
                elements: [
                    {
                        id: 1,
                        href: '/sustainability-and-responsibility',
                        tag: 'sustainability & responsibility'
                    },
                    {
                        id: 2,
                        href: '/high-risk-safety',
                        tag: 'high risk safety'
                    },
                    {
                        id: 3,
                        href: '/governance-and-accountability',
                        tag: 'governance & accountability'
                    },
                    {
                        id: 4,
                        href: '/environment-and-impact',
                        tag: 'environement & impact'
                    },
                    {
                        id: 5,
                        href: '/people-and-communities',
                        tag: 'people & communities'
                    }
                ]
            },
            {
                id: 3,
                heading: 'how to work with us',
                elements: [
                    {
                        id: 1,
                        href: '/suppliers',
                        tag: 'suppliers'
                    },
                    {
                        id: 2,
                        href: '/ctpat-statement',
                        tag: 'CTPAT statement'
                    },
                    {
                        id: 3,
                        href: '/join the team',
                        tag: 'join the team'
                    },
                    {
                        id: 4,
                        href: '/major-projects-team',
                        tag: 'major projects team'
                    }
                ]
            },
            {
                id: 4,
                heading: 'where to find us',
                elements: [
                    {
                        id: 1,
                        href: '/global-projects',
                        tag: 'global projects'
                    }
                ]
            },
            {
                id: 5,
                heading: 'hotline',
                elements: [
                    {
                        id: 1,
                        href: 'tel:008801913777565',
                        tag: '+8801913777565'
                    },
                    {
                        id: 2,
                        href: 'mailto:kanon754@gmail.com',
                        tag: 'pacificliftbd@gmail.com'
                    }
                ]
            }
        ]
    }
]


export default nestedNavItem;
