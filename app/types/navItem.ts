import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


interface IconProps {
    icon:IconDefinition,
    size: FontAwesomeIconProps['size'],
    color: FontAwesomeIconProps['color'] 
}

interface NavItemType {
    id: number,
    icon: IconProps,
    heading: string,
    child: ChildNavItem[]
}

type ChildNavItem = {
    id: number,
    heading: string,
    elements: NavItem[]
}

type NavItem = {
    id: number,
    href: string,
    tag: string
}

export default NavItemType;
