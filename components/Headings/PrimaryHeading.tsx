import React from 'react';

interface PrimaryHeadingProps {
  text: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({ text }) => {
  return (
    <h1 className='font-extrabold text-4xl'>
      {text}
    </h1>
  );
};

export default PrimaryHeading;
