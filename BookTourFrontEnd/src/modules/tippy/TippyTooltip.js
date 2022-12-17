import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const TippyTooltip = ({ children, onClick, content, ...props }) => {
  return (
    <Tippy content={content} interactive {...props}>
      {children}
    </Tippy>
  );
};

export default TippyTooltip;
