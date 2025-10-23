import React from 'react';
import { LucideIcon } from 'lucide-react';

type Props = {
    icon: LucideIcon,
    size: number,
    color: string
}

const LucideIconWrapper:React.FC<Props> = ({ icon, size, color }) => {

    if (!icon) return;
    const Icon = icon;

    return (
        <Icon size={size} color={color}/>
    )
}

export default LucideIconWrapper;
