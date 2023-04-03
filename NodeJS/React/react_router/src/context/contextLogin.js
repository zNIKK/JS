import { createContext, useMemo, useReducer } from "react";
import loginReducer from "../reducers/loginReducer";

export const Context = createContext();

export default function ContextLogin({children}) {
    const [state, dispatch] = useReducer(loginReducer, false);
    const value = useMemo(() => ({
        state,
        dispatch
    }), [state])
    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    );
}