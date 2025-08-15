"use client";
interface ButtonProps {
  text: string;
  bgColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const SmallButton: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-[var(--primary-color)]",
  hoverColor = "hover:bg-[var(--primary-color)]",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2.5 w-40 text-white rounded-full transition cursor-pointer ${bgColor} ${hoverColor}`}
    >
      {text}
    </button>
  );
};

export default SmallButton;
