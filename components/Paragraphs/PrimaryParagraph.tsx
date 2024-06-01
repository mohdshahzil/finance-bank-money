import React from 'react';
import PropTypes from 'prop-types';

interface PrimaryParagraphProps {
    className?: string;
    text: string;
}

const PrimaryParagraph: React.FC<PrimaryParagraphProps> = ({ className = '', text }) => {
    const baseClasses = 'opacity-60 text-justify';
    const combinedClasses = `${baseClasses} ${className}`;

    return (
        <div className={combinedClasses}>
            {text}
        </div>
    );
};

PrimaryParagraph.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default PrimaryParagraph;
