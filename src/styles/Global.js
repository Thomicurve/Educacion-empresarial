import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Colors = {
    C_2: '#503E9D',
    C_3: '#D7D7FF',
    C_10: '#FE6D73',
    Gray_1: '#595959',
    Gray_2: '#828282',
    Gray_3: '#37374A',
    Gray_5: '#CCCCCC',
    White_1: '#F2F2F2',
    White_2: '#FFFFFF',
    White_3: '#E5E7EB'
};