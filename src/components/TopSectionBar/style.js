import styled from "styled-components";
import { Colors } from "../../styles/Global";

const SectionContainer = styled.section`
    padding-top: 14px;
    padding-bottom: 10px;
    padding-left: 38px;
    color: ${Colors.C_2};
`;

const TextContainer = styled.p`
    display: flex;
    align-items: center;
`;

const TitleSection = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    margin-right: 5px;
`;

const Icon = styled.img`
    margin: 0px 3px;
`;

export { Icon, TextContainer, SectionContainer, TitleSection };