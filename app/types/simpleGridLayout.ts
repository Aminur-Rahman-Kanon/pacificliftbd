import { LucideIcon } from 'lucide-react';

export default interface SimpleGridLayoutType {
    id: string,
    heading?: string,
    gridItems: GridItemType[]
}

type GridItemType = {
    id: string,
    icon: LucideIcon,
    heading: string,
    text: string
}
