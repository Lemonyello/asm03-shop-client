import styles from "./FeatureCardSubscribe.module.css";

// in home page, cards that show special features of the shop, and a text field to subscribe to the shop

const featureCards = [
  {
    title: "free shipping",
    subtitle: "Free shipping worldwide",
  },
  {
    title: "24 x 7 service",
    subtitle: "Free shipping worldwide",
  },
  {
    title: "festival offer",
    subtitle: "Free shipping worldwide",
  },
];

const FeatureCards = () => {
  return (
    <div className={styles["feature-cards"]}>
      {featureCards.map((card, i) => (
        <div key={i}>
          <h5>{card.title}</h5>
          <p>{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div>
        <h4>Let's be friends!</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div>
        <input type="text" placeholder="Enter your email address" />
        <button>Subscibe</button>
      </div>
    </div>
  );
};

const FeatureCardSubscribe = () => {
  return (
    <>
      <FeatureCards />
      <Subscribe />
    </>
  );
};

export default FeatureCardSubscribe;
