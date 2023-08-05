const PageHeader = ({ smallHeader, bigHeader, path }) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>{bigHeader}</h1>

      <div className="d-flex justify-content-between">
        <h3>{path}</h3>
        <h3>{smallHeader}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
