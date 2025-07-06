import { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import { cButtonProps } from "../utils";

export interface ButtonProps extends cButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset";
  extraClassName?: string;
  title?: string;
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}

function Button({
  type,
  extraClassName,
  text,
  title,
  children,
  btnColor,
  btnVariant,
  icon,
  iconPlacement,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ? type : "button"}
      className={clsx("c-button", extraClassName && extraClassName)}
      title={title ?? text ?? "Button Title"}
      aria-label={title ?? text ?? "Button Title"}
      data-color={btnColor}
      data-variant={btnVariant}
      data-icon-placement={iconPlacement && iconPlacement}
      onClick={onClick}
      {...props}
    >
      {text ? <span className="c-button-text">{text}</span> : children}
      {icon && <i className="c-button-icon">{icon}</i>}
    </button>
  );
}

export default Button;
