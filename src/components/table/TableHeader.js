import cx from "classnames";
import PropTypes from "prop-types";
import { Typography } from "../Typography";

export const TableHeader = ({ className, label }) => {
  return (
    <div
      className={cx("px-3 flex w-full items-center justify-between", className)}
    >
      <Typography size="2xl">{label}</Typography>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

TableHeader.defaultProps = {
  className: "",
  label: "",
};
