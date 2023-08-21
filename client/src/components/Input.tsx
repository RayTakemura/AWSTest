import React from "react";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
  className,
}) => {
  return (
    <input
      type="search"
      onChange={(event) => onChange(event.target.value)}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`bg-inherit border-solid border-2 border-slate-500 rounded px-2 py-1 mx-1 ${className}`}
    ></input>
  );
};
export default Input;
