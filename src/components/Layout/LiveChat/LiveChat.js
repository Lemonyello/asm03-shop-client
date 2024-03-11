import styles from "./LiveChat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../../store/chat";
import ShopContext from "../../../store/shop-context";
import { useRef, useContext } from "react";
import {
  getFromStorage,
  CHAT_ROOM,
  saveToStorage,
  removeFromStorage,
} from "../../../store/local-storage";
import { get_chat_id } from "../../../store/url";

// in all pages, has a button to show the chat, a chat window

const ChatHeader = () => {
  return (
    <div className={styles["chat-header"]}>
      <h2>Customer Support</h2>
      <button>Let's Chat App</button>
    </div>
  );
};

const Conversation = () => {
  const { chats } = useSelector((state) => state.chat);

  return (
    <div className={styles.conversation}>
      {chats.map((chat, i) =>
        chat.username === "server" ? (
          <div className={styles["admin-chat"]} key={i}>
            <img alt="business man" src="./resource/business profile pic.PNG" />
            <p>ADMIN: {chat.msg}</p>
          </div>
        ) : (
          <p className={styles["customer-chat"]} key={i}>
            {chat.msg}
          </p>
        )
      )}
    </div>
  );
};

const ChatField = () => {
  const chatRef = useRef();
  const { socket } = useContext(ShopContext);
  const dispatch = useDispatch();

  return (
    <div className={styles["chat-field"]}>
      <img alt="business man" src="./resource/business profile pic.PNG" />
      <input type="text" placeholder="Enter Message!" ref={chatRef} />
      <div>
        <FontAwesomeIcon icon={faPaperclip} className={styles.icon} />

        <FontAwesomeIcon icon={faFaceSmile} className={styles.icon} />

        <button
          onClick={() => {
            const chatRoom = getFromStorage(CHAT_ROOM, null);

            if (chatRef.current.value.trim() === "/end") {
              chatRef.current.value = "";

              if (!chatRoom) return;

              socket.emit("leave_chat", { room: chatRoom });

              dispatch(chatActions.deleteChat());

              removeFromStorage(CHAT_ROOM);

              return;
            }

            if (!chatRoom) {
              const input = chatRef.current.value;
              (async (inp) => {
                try {
                  const res = await fetch(get_chat_id);

                  const { room } = await res.json();

                  saveToStorage(CHAT_ROOM, room);

                  socket.emit("user_join_room", {
                    username: "abc",
                    room,
                    msg: inp,
                  });

                  dispatch(chatActions.chat({ username: "abc", msg: inp }));
                } catch (error) {}
              })(input);
            } else
              socket.emit("send_message", {
                username: "abc",
                msg: chatRef.current.value,
                room: chatRoom,
              });

            chatRef.current.value = "";
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#48b0f7" }} />
        </button>
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
  const { showChat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  return (
    <>
      {showChat && <ChatWindow />}
      <button
        className={styles["chat-button"]}
        onClick={dispatch.bind(null, chatActions.toggleChat())}
      >
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
