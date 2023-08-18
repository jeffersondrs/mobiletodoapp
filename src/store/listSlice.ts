import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
  id: string;
  content: string;
  completed: boolean;
}

interface ListObject {
  id: string;
  title: string;
  completed: boolean;
  listItems: ListItem[];
}

interface Lists {
  lists: ListObject[];
}

const initialState: Lists = {
  lists: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: ListObject = {
        id: Date.now().toString(),
        title: action.payload.title,
        listItems: [],
        completed: false,
      };
      state.lists.push(newList);
    },
    editList: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const list = state.lists.find((item) => item.id === action.payload.id);
      if (list) {
        list.title = action.payload.title;
      }
    },
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.lists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.lists.splice(index, 1);
      }
    },
    toggleList: (state, action: PayloadAction<{ id: string }>) => {
      const list = state.lists.find((item) => item.id === action.payload.id);
      if (list) {
        list.completed = !list.completed;
      }
    },
    addListItem: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const list = state.lists.find((item) => item.id === action.payload.id);
      if (list) {
        const newListItem: ListItem = {
          id: Date.now().toString(),
          content: action.payload.content,
          completed: false,
        };
        list.listItems.push(newListItem);
      }
    },
    editListItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string; content: string }>
    ) => {
      const list = state.lists.find(
        (item) => item.id === action.payload.listId
      );
      if (list) {
        const listItem = list.listItems.find(
          (item) => item.id === action.payload.itemId
        );
        if (listItem) {
          listItem.content = action.payload.content;
        }
      }
    },
    toggleListItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const list = state.lists.find(
        (item) => item.id === action.payload.listId
      );
      if (list) {
        const listItem = list.listItems.find(
          (item) => item.id === action.payload.itemId
        );
        if (listItem) {
          listItem.completed = !listItem.completed;
        }
      }
    },
    deleteListItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const list = state.lists.find(
        (item) => item.id === action.payload.listId
      );
      if (list) {
        const index = list.listItems.findIndex(
          (item) => item.id === action.payload.itemId
        );
        if (index !== -1) {
          list.listItems.splice(index, 1);
        }
      }
    },
    resetList: (state) => {
      state.lists = [];
    },
  },
});

export const {
  addList,
  editList,
  deleteList,
  addListItem,
  editListItem,
  toggleListItem,
  deleteListItem,
  resetList,
  toggleList,
} = listSlice.actions;

export const listReducer = listSlice.reducer;

export const selectLists = (state: { list: Lists }) => state.list.lists;

export const selectList = (id: string) => (state: { list: Lists }) =>
  state.list.lists.find((item) => item.id === id);

export const selectListItems = (id: string) => (state: { list: Lists }) =>
  state.list.lists.find((item) => item.id === id)?.listItems;

export const selectListItem =
  (listId: string, itemId: string) => (state: { list: Lists }) =>
    state.list.lists
      .find((item) => item.id === listId)
      ?.listItems.find((item) => item.id === itemId);

export const selectListTitle = (id: string) => (state: { list: Lists }) =>
  state.list.lists.find((item) => item.id === id)?.title;

export const selectListLength = (id: string) => (state: { list: Lists }) =>
  state.list.lists.find((item) => item.id === id)?.listItems.length;

export const selectCompletedListItems =
  (id: string) => (state: { list: Lists }) =>
    state.list.lists
      .find((item) => item.id === id)
      ?.listItems.filter((item) => item.completed);

export const selectCompletedListItemsLength =
  (id: string) => (state: { list: Lists }) =>
    state.list.lists
      .find((item) => item.id === id)
      ?.listItems.filter((item) => item.completed).length;

export const selectUncompletedListItems =
  (id: string) => (state: { list: Lists }) =>
    state.list.lists
      .find((item) => item.id === id)
      ?.listItems.filter((item) => !item.completed);

export const selectUncompletedListItemsLength =
  (id: string) => (state: { list: Lists }) =>
    state.list.lists
      .find((item) => item.id === id)
      ?.listItems.filter((item) => !item.completed).length;

export const selectAllListItems = (state: { list: Lists }) =>
  state.list.lists.map((item) => item.listItems).flat();
