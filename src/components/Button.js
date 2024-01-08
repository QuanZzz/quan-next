import cx from "classnames";
import PropTypes from "prop-types";

const SIZES = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-400 text-black",
  textLink: "text-blue-500 underline hover:text-blue-700 hover:no-underline",
};

export const Button = ({
  children,
  onClick,
  className,
  size,
  variant,
  ...props
}) => {
  const sizeClass = SIZES[size] || SIZES.md;
  const variantClass = VARIANTS[variant] || VARIANTS.primary;

  return (
    <button
      onClick={onClick}
      className={cx("font-bold rounded", sizeClass, variantClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  size: "md",
  variant: "primary",
};
