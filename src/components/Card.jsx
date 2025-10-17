import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.shadow - Whether to show shadow
 * @param {boolean} props.rounded - Whether to round corners
 * @returns {JSX.Element} - Card component
 */
const Card = ({
  children,
  className = '',
  shadow = true,
  rounded = true,
  ...rest
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800';
  const shadowClasses = shadow ? 'shadow' : '';
  const roundedClasses = rounded ? 'rounded-lg' : '';

  const cardClasses = `${baseClasses} ${shadowClasses} ${roundedClasses} ${className}`.trim();

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Card;
