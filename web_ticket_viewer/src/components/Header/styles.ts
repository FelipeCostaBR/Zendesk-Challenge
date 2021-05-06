import styled from 'styled-components';

import { size } from '../../styles/global';

export const Container = styled.div`
    max-width: ${size.laptop};
    padding: 0 1rem;

    h1 {
        margin: 1rem;
        font-size: 3rem;
    }
`;

export const BodyContent = styled.div`
    li {
        font-size: 20px;
        list-style-type: none;
    }
`;
