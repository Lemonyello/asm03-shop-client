import styles from "./PageHeader.module.css";

// in shop, cart, checkout page, has current page name
const PageHeader = ({ header, path }) => {
  return (
    <div className={styles.header}>
      <h1>{header}</h1>
      <div className="d-flex justify-content-between">
        <h3 className={styles.path}>
          {path?.split("/").map((subpath, i) => (
            <span key={i}>
              {subpath}
              <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            </span>
          ))}
        </h3>
        <h3 className={styles["small-header"]}>{header}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
