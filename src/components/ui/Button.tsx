"use client";
interface ButtonProps {
  text: string;
  bgColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-[var(--primary-color)]",
  hoverColor = "hover:bg-[var(--primary-color)]",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2  text-white rounded-full transition cursor-pointer ${bgColor} ${hoverColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
