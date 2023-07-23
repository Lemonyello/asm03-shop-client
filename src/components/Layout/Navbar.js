const Navbar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex gap-2">
        <button>Home</button>
        <button>Shop</button>
      </div>
      <h1>Boutique</h1>
      <div className="d-flex gap-2">
        <button>Cart</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
