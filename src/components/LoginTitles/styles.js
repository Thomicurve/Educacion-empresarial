import styled from "styled-components";

const TitleContainer = styled.section`
    width: 100%;
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    font-style: normal;
    font-weight: 600;
    color: #503E9D;
    margin-top: 180px;

    @media screen and (max-height: 820px) {
        margin-top: 110px;
    }

    @media screen and (max-height: 720px) {
        margin-top: 80px;
    }
    
`;

export { TitleContainer };