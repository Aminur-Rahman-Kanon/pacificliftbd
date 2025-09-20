interface NavItemType {
    id: number,
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
