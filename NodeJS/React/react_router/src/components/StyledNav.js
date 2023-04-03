import styled from "styled-components";
const StyledNav = styled.nav`
    background-color: gray;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    div {
        font-size: 30px;
    }

    ul {
        display: flex;
    }

    li {
        color: white;
        padding: 10px;
    }

`

export default StyledNav;