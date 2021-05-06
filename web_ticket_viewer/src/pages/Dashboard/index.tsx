import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import TicketModal from '../../components/TicketModal';
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
    const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
    const [ticketModalData, setTicketModalData] = useState<Ticket>();

    const openTicketModal = (ticket: Ticket): void => {
        setTicketModalData(ticket);
        setIsTicketModalOpen(true);
    };

    const closeTicketModal = (): void => {
        setIsTicketModalOpen(false);
    };

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
                                <tr key={ticket.id} onClick={() => openTicketModal(ticket)}>
                                    <td className={ticket.status}>{ticket.status}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{new Intl.DateTimeFormat('en-AD').format(new Date(ticket.request_dt))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableContainer>
            </BodyContent>
            <TicketModal isOpen={isTicketModalOpen} onRequestClose={closeTicketModal} data={ticketModalData} />
        </Container>
    );
};
