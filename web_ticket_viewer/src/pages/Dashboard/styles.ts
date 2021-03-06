import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { size } from '../../styles/global';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    max-width: ${size.laptop};
    margin-left: auto;
    margin-right: auto;
`;

export const BodyContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    max-width: ${size.laptop};
    margin: auto;
`;

export const TableContainer = styled.div`
    width: 100%;
    margin: 1rem auto 0px;

    @media screen and (max-width: 500px) {
        overflow-x: scroll;
    }

    table {
        width: 100%;

        thead {
            th {
                color: var(--text-title);
                font-weight: 400;
                font-size: 20px;
                padding: 1rem 2rem;
                text-align: left;
                line-height: 1.5rem;

                &:first-child {
                    width: 10%;
                }

                &:last-child {
                    width: 10%;
                }
            }
        }

        tbody {
            tr {
                cursor: pointer;

                &:hover {
                    background: ${darken(0.05, '#f0f2f5')};
                }
            }

            td {
                padding: 0.4rem 1rem;
                border: 1px ${lighten(0.5, '#363f5f')} solid;
                border-radius: 0.25rem;

                &:first-child {
                    font-size: 20px;
                    padding-left: 50px;
                    color: var(--shape);
                }
                &.open {
                    background: var(--red);
                    &:hover {
                        background: ${darken(0.08, '#e52e4d')};
                    }
                }

                &.pending {
                    background: var(--blue);
                    &:hover {
                        background: ${darken(0.08, '#1E90FF')};
                    }
                }

                &.closed {
                    background: var(--green);
                    &:hover {
                        background: ${darken(0.08, '#006400')};
                    }
                }
            }
        }
    }
`;
