import styled from 'styled-components';
import { size } from '../../styles/global';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    max-width: ${size.laptop};
    margin: 25% auto 30px auto;
    padding: 0 1rem;

    p {
        font-size: 1.5rem;
    }
`;
