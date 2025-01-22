import React, { CSSProperties, FC, JSX, ReactNode } from "react";

type ThemeTextProps = {
  children: ReactNode;
  style?: CSSProperties;
  classname?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "p";
};

const ThemeText: FC<ThemeTextProps> = ({
  children,
  style,
  variant = "p",
  classname,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag style={style} className={classname}>
      {children}
    </Tag>
  );
};

export default ThemeText;
