import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, BodyContent } from './styles';

interface TotalTicket {
    solved: number;
    pending: number;
    unsolved: number;
}

const Header: React.FC = () => {
    const [totalTickets, setTotalTickets] = useState<TotalTicket>();

    useEffect(() => {
        const fetchTickets = async (): Promise<void> => {
            const response = await api.get('/tickets/total');
            const { totalTicketsStatus } = response.data;

            setTotalTickets(totalTicketsStatus);
        };
        fetchTickets();
    }, []);

    return (
        <Container>
            <h1>Ticket Viewer </h1>
            <BodyContent>
                {totalTickets ? (
                    <ul>
                        <li>{totalTickets?.unsolved} - tickets open </li>
                        <li>{totalTickets?.pending} - tickets pending</li>
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
