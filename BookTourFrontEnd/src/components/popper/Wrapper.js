import { motion } from "framer-motion";
import classNames from "~/utils/classNames";
const Wrapper = ({ children, width, className, ...props }) => {
  return (
    <motion.div
      className={classNames(
        "rounded-[4px] bg-white pb-4 shadow-[rgba(0,_0,_0,_0.122)_0px_2px_12px]",
        className,
        width && width
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
