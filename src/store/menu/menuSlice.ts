import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface menuState {
  activeMenuItem: string;
  actionMenuItem: string | null;
}

const initialState: menuState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    menuItemClick: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action: PayloadAction<string|null>) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { menuItemClick, actionItemClick } = menuSlice.actions;

export const activeMenuItemState = (state: RootState) => state.menu;

export default menuSlice.reducer;
