import cx from "classnames";
import PropTypes from "prop-types";

export const MobileDataTableBaseComponent = ({ className, data, columns }) => {
  return (
    <div
      className={cx("max-w-md w-full sm:hidden bg-transparent my-4", className)}
    >
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full flex flex-col border-b p-3 text-gray-900"
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className={cx(
                "font-medium my-1 font-bold tracking-wide text-base",
                column.columnClassname
              )}
            >
              {row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

MobileDataTableBaseComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
};

MobileDataTableBaseComponent.defaultProps = {
  className: "",
  data: null,
  columns: null,
};
