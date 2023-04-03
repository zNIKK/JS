import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    toast.error("Deu erro");
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error("Deu erro");

    yield put(actions.clicaBotaoFailure());
  }
}

function* watcherSaga() {
  yield takeLatest(actions.clicaBotaoRequest(), exampleRequest);
}

export default watcherSaga;

// export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
