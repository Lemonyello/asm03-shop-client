import styles from "./LiveChat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ChatHeader = () => {
  return (
    <div className={styles["chat-header"]}>
      <h2>Customer Support</h2>
      <button>Let's Chat App</button>
    </div>
  );
};

const Conversation = () => {
  return (
    <div className={styles.conversation}>
      <p className={styles["customer-chat"]}>Xin chào</p>

      <p className={styles["customer-chat"]}>Làm thế nào để xem các sản phẩm</p>
      <div className={styles["admin-chat"]}>
        <img alt="business man" src="./resource/business profile pic.PNG" />
        <p>ADMIN: Chào bạn</p>
      </div>
      <div className={styles["admin-chat"]}>
        <img alt="business man" src="./resource/business profile pic.PNG" />
        <p>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</p>
      </div>
    </div>
  );
};

const ChatField = () => {
  return (
    <div className={styles["chat-field"]}>
      <img alt="business man" src="./resource/business profile pic.PNG" />
      <input type="text" placeholder="Enter Message!" />
      <div>
        <FontAwesomeIcon icon={faPaperclip} className={styles.icon} />
        <FontAwesomeIcon icon={faFaceSmile} className={styles.icon} />
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#48b0f7" }} />
      </div>
    </div>
  );
};

const ChatWindow = () => {
  return (
    <div className={styles["chat-window"]}>
      <ChatHeader />
      <Conversation />
      <ChatField />
    </div>
  );
};

const LiveChat = () => {
  return (
    <>
      {/* <ChatWindow /> */}
      <button className={styles["chat-button"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          style={{ fontSize: "32px" }}
        >
          <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
        </svg>
      </button>
    </>
  );
};

export default LiveChat;
