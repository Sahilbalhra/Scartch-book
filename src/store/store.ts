import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menu/menuSlice";
import ToolboxReducer from "./toolbox/toolboxSlice";

export const store = configureStore({
  reducer: { menu: MenuReducer, toolbar: ToolboxReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
