import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  content: string;
  className?: string;
}

const Button: React.FC<Props> = ({ className, onClick, content }) => {
  return (
    <button
      className={`border-solid border-2 border-slate-400 bg-slate-500 rounded px-2 py-1 mx-1 ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
