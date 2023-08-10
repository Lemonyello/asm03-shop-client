import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const QuantityButton = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <button>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <p className="my-0 fw-bold fst-normal bg-white">1</p>
      <button>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default QuantityButton;
