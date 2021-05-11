import React, { useEffect } from 'react';

import useTickets from '../../hooks/useTickets';
import { Container, BodyContent } from './styles';

const Header: React.FC = () => {
    const { ticketsStatus, setCurrentPageUrl } = useTickets();

    useEffect(() => {
        setCurrentPageUrl('/tickets/total');
    }, []);

    return (
        <Container>
            <h1>Ticket Viewer </h1>
            <BodyContent>
                {ticketsStatus ? (
                    <ul>
                        <li>{ticketsStatus?.unsolved} - tickets open </li>
                        <li>{ticketsStatus?.pending} - tickets pending</li>
                    </ul>
                ) : (
                    <>
                        <h1>Loading...</h1>
                    </>
                )}
            </BodyContent>
        </Container>
    );
};

export default Header;
