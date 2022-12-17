const Service = ({ children }) => {
  return (
    <div className="flex items-center gap-2">
      <img src="/check.svg" alt="icon-check" />
      <span>{children}</span>
    </div>
  );
};

export default Service;
