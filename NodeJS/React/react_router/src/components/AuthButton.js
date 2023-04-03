import { useContext } from "react";
import { loginAction, logoutAction } from "../actions/loginActions";
import { Context } from "../context/contextLogin";

export default function Auth() {
    const {state, dispatch} = useContext(Context);
    return (
        state ? 
        <button onClick={() => {dispatch(logoutAction())} }>
            Login
        </button> :
        <button onClick={() => {dispatch(loginAction())} }>
            Logout
        </button>
    );
}