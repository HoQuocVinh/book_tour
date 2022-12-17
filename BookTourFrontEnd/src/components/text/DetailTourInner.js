const DetailTourInner = ({ text, children }) => {
  return (
    <span className="text-[13px] text-c3">
      {text} <b className="ml-1 text-dark-blue">{children}</b>
    </span>
  );
};

export default DetailTourInner;
