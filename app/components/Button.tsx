type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: "w-fit" | "w-full";
  outlineColor?: string;
};

const Button = ({
  children,
  disabled,
  onClick,
  width = "w-fit",
  outlineColor = "",
}: ButtonProps) => {
  return (
    <button
      className={`${outlineColor} rounded py-2 px-4 outline transition-transform enabled:hover:scale-105 ${width}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
