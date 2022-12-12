import React from "react";
import useTheme from "../hooks/useTheme";

interface Props {
  variant?: "primary" | "secondary";
}

const UnderlineSVG: React.FC<Props> = ({ variant = "primary" }) => {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9999 8.4L7.1249 17.3C6.9249 17.5 6.68724 17.6 6.4119 17.6C6.13724 17.6 5.8999 17.5 5.6999 17.3C5.4999 17.1 5.3999 16.8623 5.3999 16.587C5.3999 16.3123 5.4999 16.075 5.6999 15.875L14.5999 7H6.9999C6.71657 7 6.4789 6.90433 6.2869 6.713C6.09557 6.521 5.9999 6.28333 5.9999 6C5.9999 5.71667 6.09557 5.479 6.2869 5.287C6.4789 5.09567 6.71657 5 6.9999 5H16.9999C17.2832 5 17.5206 5.09567 17.7119 5.287C17.9039 5.479 17.9999 5.71667 17.9999 6V16C17.9999 16.2833 17.9039 16.5207 17.7119 16.712C17.5206 16.904 17.2832 17 16.9999 17C16.7166 17 16.4792 16.904 16.2879 16.712C16.0959 16.5207 15.9999 16.2833 15.9999 16V8.4Z"
        fill={
          variant === "primary"
            ? theme?.colors.primary
            : theme?.colors.secondary
        }
      />
    </svg>
  );
};

export default UnderlineSVG;
