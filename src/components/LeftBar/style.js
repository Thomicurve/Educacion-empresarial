import styled from "styled-components";
import { Colors } from "../../styles/Global";

const NavContainer = styled.nav`
    grid-row: 1 / 3;
    background-color: ${Colors.White_2};
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 28px;
`;

const LogOut = styled.button`
    background: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    text-decoration: underline;
    color: ${Colors.C_2};
    cursor: pointer;
`;

const LinksItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-radius: 4px;
`;   

const LinkText = styled.p`
    text-decoration: none;
    margin-left: 11.92px;
`;

export { LinkText, LinksItems, LogOut, NavContainer };