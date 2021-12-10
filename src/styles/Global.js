import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Colors = {
    C_2: '#503E9D',
    Gray_1: '#595959',
    Gray_2: '#828282',
    Gray_5: '#CCCCCC',
    White_1: '#F2F2F2'
};