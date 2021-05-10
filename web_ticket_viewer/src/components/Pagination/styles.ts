import { shade } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
    margin-right: 2rem;
    background: #979cc3;
    color: #312e38;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 10%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    font-size: 1.1rem;

    &:hover {
        background: ${shade(0.2, '#979cc3')};
    }
`;
