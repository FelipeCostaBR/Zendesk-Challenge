import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, BodyContent } from './styles';

interface TotalTicket {
    solved: number;
    pending: number;
    open: number;
}

const Header: React.FC = () => {
    const [totalTickets, setTotalTickets] = useState<TotalTicket>();

    useEffect(() => {
        const fetchTickets = async (): Promise<void> => {
            const response = await api.get('/tickets/total');
            const { total_tickets } = response.data;

            setTotalTickets(total_tickets);
        };
        fetchTickets();
    }, []);

    return (
        <Container>
            <h1>Ticket Viewer </h1>
            <BodyContent>
                {totalTickets ? (
                    <ul>
                        <li>{totalTickets?.open} - tickets open </li>
                        <li>{totalTickets?.pending} - tickets pending</li>
                        <li>{totalTickets?.solved} - tickets solved</li>
                    </ul>
                ) : (
                    <></>
                )}
            </BodyContent>
        </Container>
    );
};

export default Header;
