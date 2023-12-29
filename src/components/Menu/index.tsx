import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MENU_ITEMS } from "@/constants";
import {
  menuItemClick,
  actionItemClick,
  activeMenuItemState,
} from "@/store/menu/menuSlice";

const Menu = () => {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector(activeMenuItemState);

  const handleMenuClick = (itemName: string) => {
    dispatch(menuItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.UNDO,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.REDO,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.DOWNLOAD,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
