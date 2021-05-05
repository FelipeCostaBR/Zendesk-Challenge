import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, BodyContent, TableContainer } from './styles';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    subject: string;
    description: string;
    request_dt: string;
}

export const Dashboard: React.FC = () => {
    const [allTickets, setAllTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        const fetchTickets = async (): Promise<void> => {
            const response = await api.get('/tickets');
            const { tickets } = response.data;
            setAllTickets(tickets);
        };

        fetchTickets();
    }, []);

    return (
        <Container>
            <Header />
            <BodyContent>
                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Subject</th>
                                <th>Requested</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTickets.map(ticket => (
                                <tr key={ticket.id}>
                                    <td className={ticket.status}>{ticket.status}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{new Intl.DateTimeFormat('en-AD').format(new Date(ticket.request_dt))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableContainer>
            </BodyContent>
        </Container>
    );
};
