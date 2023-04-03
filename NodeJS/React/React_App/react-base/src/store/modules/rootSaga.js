import watcherSaga from "./example/sagas";

// export default combineReducers({
//   example,
// });

export default function* rootSaga() {
  return yield [watcherSaga];
}
