import styles from "./Footer.module.css";

const footerLinks = [
  {
    heading: "Customer services",
    links: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms & Conditions",
    ],
  },
  {
    heading: "company",
    links: ["What We Do", "Available Services", "Latest Posts", "FAQs"],
  },
  {
    heading: "Social media",
    links: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      {footerLinks.map((col, i) => (
        <div key={i}>
          <h4>{col.heading}</h4>
          {col.links.map((link, i) => (
            <a href="#" key={i} className="d-block">
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
