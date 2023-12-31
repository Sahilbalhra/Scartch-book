import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLORS } from "@/constants";
import type { RootState } from "../store";

const initialState = {
  [MENU_ITEMS.PENCIL]: {
    color: COLORS.BLACK,
    size: 3,
  },
  [MENU_ITEMS.ERASER]: {
    color: COLORS.WHITE,
    size: 3,
  },
  [MENU_ITEMS.UNDO]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.DOWNLOAD]: {},
};

export const toolboxSlice = createSlice({
  name: "toolbox",
  initialState: initialState,
  reducers: {
    changeColor: (state, action) => {
      state[action.payload?.item].color = action.payload.color;
    },
    changeBrushSize: (state, action) => {
      state[action.payload?.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = toolboxSlice.actions;
export const toolboxState = (state: RootState) => state.toolbar;

export default toolboxSlice.reducer;
