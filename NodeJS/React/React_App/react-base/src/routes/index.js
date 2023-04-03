import React from "react";

import { Switch } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import MyRoute from "./MyRoute";

// exact = se a rota não for exatamente o que esta no path ele não vai renderizar
// * = qualquer rota que não existir
export default function Routes() {
  toast.success("oie, sucesso!");

  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
