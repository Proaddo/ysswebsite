import React from 'react';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = ({ size, ...props }) => {
  return (
    <button className={`btn ${size}`} {...props}>
      {props.children}
    </button>
  );
};

export { Button };
