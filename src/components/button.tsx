import { ReactNode } from "react";

type ButtonColorType ="red" | "green"
| "yellow" |"gray";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  color?: ButtonColorType
};

const Button = ({ 
  animate, 
  value = "Click me",
   icon,
  color="green",
 }: ButtonProps) => {
  const colorSwitcher = (color:ButtonColorType)=>{
    switch (color) {
      case "red":
        return "btn--red";
      case "yellow":
        return "btn--yellow";
      case "green":
        return "btn--green";
      case "gray":
        return "btn--gray"

      default:
        return "";

    }
  };
 
  return (
    <button
     className={`btn ${colorSwitcher(color)} ${animate ? "btn--animate" : ""}`}>
      {icon}
      <span>{value}</span>
    </button>
  );
};

export default Button;
