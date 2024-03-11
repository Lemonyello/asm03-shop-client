// functions and variables to work with localStorage

export const USERS = "users";
export const CURRENT_USER = "current_user";
export const CART_LIST = "cart_list";
export const CHAT_ROOM = "chat_room";

export const saveToStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getFromStorage = (key, defaultVal) => {
  return localStorage.getItem(key) === null
    ? defaultVal
    : JSON.parse(localStorage.getItem(key));
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

export const saveCartToStorage = (addProd) => {
  const cartList = getFromStorage(CART_LIST, []);
  const product = cartList.find((prod) => prod._id === addProd._id);
  if (product) product.quantity += addProd.quantity;
  else cartList.push(addProd);

  saveToStorage(CART_LIST, cartList);
};

export const removeProductFromStorage = (_id) => {
  const cartList = getFromStorage(CART_LIST, []);
  saveToStorage(
    CART_LIST,
    cartList.filter((prod) => prod._id !== _id)
  );
};
