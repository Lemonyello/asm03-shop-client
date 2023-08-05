import styles from "./FeatureCardSubscribe.module.css";

const featureCards = [
  {
    title: "free shipping",
    subtitle: "free shipping worldwide",
  },
  {
    title: "24 x 7 service",
    subtitle: "free shipping worldwide",
  },
  {
    title: "festival offer",
    subtitle: "free shipping worldwide",
  },
];

const FeatureCardSubscribe = () => {
  return (
    <>
      <div className="d-flex justify-content-around">
        {featureCards.map((card, i) => (
          <div key={i}>
            <h5>{card.title}</h5>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h4>Let's be friends!</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <input type="text" />
          <button>Subscibe</button>
        </div>
      </div>
    </>
  );
};

export default FeatureCardSubscribe;
