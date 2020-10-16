const initialState = {
  menu: [],
  items: JSON.parse(localStorage.getItem("items")) || [],
  loading: true,
  error: false,
  finalCost: +localStorage.getItem("cost") || 0,
  idToCard: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "MENU_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const indexAdd = state.items.findIndex((item) => item.id === id);
      if (indexAdd > -1) {
        const item = state.items.find((item) => id === item.id);
        console.log(item);
        const newItem = {
          ...item,
          count: item.count + 1,
        };
        const costAdd = state.finalCost + item.price;
        // 
        localStorage.setItem('cost', costAdd);
        localStorage.setItem(
          "items",
          JSON.stringify([
            ...state.items.slice(0, indexAdd),
            newItem,
            ...state.items.slice(indexAdd + 1),
          ])
          // 
        );
        return {
          ...state,
          finalCost: costAdd,
          items: [
            ...state.items.slice(0, indexAdd),
            newItem,
            ...state.items.slice(indexAdd + 1),
          ],
        };
      }
      const item = state.menu.find((item) => id === item.id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        category: item.category,
        id: item.id,
        count: 1,
      };
      const costAdd = state.finalCost + item.price;
      // 
      localStorage.setItem('cost', costAdd);
      localStorage.setItem(
        "items",
        JSON.stringify([
          ...state.items.slice(0, indexAdd),
          newItem,
          ...state.items.slice(indexAdd + 1),
        ])
        // 
      );
      return {
        ...state,
        items: [...state.items, newItem],
        finalCost: costAdd,
      };
    case "ITEM_REMOVE_FROM_CART":
      const index = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === index);
      const costRemove =
        state.finalCost -
        state.items[itemIndex].price * state.items[itemIndex].count;
      //
      localStorage.setItem('cost', costRemove );
      localStorage.setItem(
        "items",
        JSON.stringify([
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ])
        //
      );
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
        finalCost: costRemove,
      };
    case "RESET_CART":
      localStorage.clear();
      return {
        ...state,
        items: [],
        finalCost: 0,
      };
    default:
      return state;
  }
};

export default reducer;
