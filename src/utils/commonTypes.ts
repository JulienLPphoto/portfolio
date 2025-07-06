import { HTMLProps, ReactNode } from "react";

export interface cButtonProps {
  btnColor?: "black" | "ghost";
  btnVariant?: "link" | "icon";
  icon?: ReactNode;
  iconPlacement?: "left";
}

export interface cFormGroupProps {
  extraClassName?: string;
  labelText: string;
  labelIsHidden?: boolean;
  helpText?: ReactNode,
}

export interface cInputProps extends HTMLProps<HTMLInputElement> {
  type: "text" | "password" | "search" | "email" | "tel";
  name: string;
  placeholder?: string;
}

export interface DataListProps {
  image: string;
  city: string;
  country: string;
  year: string;
  projectName?: string;
  isThumbnail?: boolean;
  tags: string[];
}