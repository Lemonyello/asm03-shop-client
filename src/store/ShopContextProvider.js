import openSocket from "socket.io-client";
import ShopContext from "./shop-context";
import { base_url } from "./url";

const socket = openSocket(base_url.slice(0, -1));

const ShopContextProvider = ({ children }) => {
  return (
    <ShopContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
