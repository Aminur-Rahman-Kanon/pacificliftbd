import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

interface CustomIconProps {
  icon: IconDefinition,
  size?: FontAwesomeIconProps['size'],
  color: FontAwesomeIconProps['color']
}

const CustomIcon:React.FC<CustomIconProps> = ({ icon, size, color }) => {

  return <FontAwesomeIcon icon={icon} size={size} color={color} />
}

export default CustomIcon;
