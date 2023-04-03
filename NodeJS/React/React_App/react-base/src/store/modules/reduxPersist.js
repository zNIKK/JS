import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleReducer from "./example/reducer";

// export default (reducers) => {
//   const persistedReducers = persistReducer(
//     {
//       key: "REACT-BASE-TESTE",
//       storage,
//       whitelist: ["example"],
//     },
//     reducers
//   );
//   return persistedReducers;
// };

const persistConfig = {
  key: "REACT-BASE-TESTE",
  storage,
};

const persistedReducers = persistReducer(persistConfig, exampleReducer);

export default persistedReducers;
