import styles from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({item}) => {
  return <div className={styles['cart-item']}>
    <img alt={item.name} src={item.img} />
    <h4>{item.name}</h4>
    <p>{item.price} VND</p>
    <div className={`${styles.quantity} d-flex`}>
      <button><FontAwesomeIcon icon={faCaretLeft} /></button>
      <p>1</p>
      <button><FontAwesomeIcon icon={faCaretRight} /></button>
    </div>
    <p>{item.price} VND</p>
    <button><FontAwesomeIcon icon={faTrashCan} /></button>
  </div>
 };

export default CartItem;