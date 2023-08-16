export const USERS = "users";
export const CURRENT_USER = "current_user";
export const CART_LIST = "cart_list";

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
  const product = cartList.find((prod) => prod.id === addProd.id);
  if (product) product.amount += addProd.amount;
  else cartList.push(addProd);

  saveToStorage(CART_LIST, cartList);
};

export const removeProductFromStorage = (id) => {
  const cartList = getFromStorage(CART_LIST, []);
  saveToStorage(
    CART_LIST,
    cartList.filter((prod) => prod.id !== id)
  );
};
