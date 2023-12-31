import styles from "./index.module.css";
import cx from "classnames";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { activeMenuItemState } from "@/store/menu/menuSlice";
import { changeColor, changeBrushSize } from "@/store/toolbox/toolboxSlice";

function Toolbox() {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector(activeMenuItemState);
  const { color, size } = useAppSelector(
    (state) => state.toolbar[activeMenuItem]
  );
  const showStrokeoption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const updateBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBrushSize({
        item: activeMenuItem,
        size: e.target.value,
      })
    );
  };

  const updateColor = (newColor: string) => {
    dispatch(
      changeColor({
        item: activeMenuItem,
        color: newColor,
      })
    );
  };

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeoption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type='range'
              min={1}
              max={10}
              step={1}
              value={size}
              onChange={(e) => updateBrushSize(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Toolbox;
