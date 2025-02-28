import React from "react";

const Button = ({
  type = "button",
  title,
  icon: Icon,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-2 py-1 md:px-4 md:py-2 rounded-md focus:outline-none flex items-center justify-center gap-1 md:gap-2 text-xs md:text-base lg:text-lg";

  const variantStyles = {
    primary: "bg-btn-primary text-white hover:bg-btn-primary-hover",
    secondary: "bg-btn-secondary text-white hover:bg-btn-secondary-hover",
    danger: "bg-btn-danger text-white hover:bg-btn-danger-hover",
    success: "bg-btn-success text-white hover:bg-btn-success-hover",
    warning: "bg-btn-warning text-white hover:bg-btn-warning-hover",
    info: "bg-btn-info text-white hover:bg-btn-info-hover",
    light: "bg-btn-light text-text-primary hover:bg-btn-light-hover",
    dark: "bg-btn-dark text-white hover:bg-btn-dark-hover",
    link: "bg-transparent text-btn-link hover:text-btn-link-hover underline",
    outline:
      "bg-transparent border border-btn-primary text-btn-primary hover:bg-btn-primary hover:text-white",
  };

  const buttonClass = `${baseStyles} ${
    variantStyles[variant] || variantStyles.primary
  }`;

  return (
    <button type={type} className={buttonClass} {...props}>
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}{" "}
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default Button;
