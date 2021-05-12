import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import TicketModal from '../../components/TicketModal';
import Pagination from '../../components/Pagination';
import useTickets from '../../hooks/useTickets';

import { Container, BodyContent, TableContainer } from './styles';
import AppError from '../../components/Error';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    request_dt: string;
    subject: string;
    description: string;
}

interface paginationProps {
    prev: string;
    next: string;
}

const Dashboard: React.FC = () => {
    const { allTickets, pages, setCurrentPageUrl, httpStatusCode, httpErrorMessage } = useTickets();

    const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
    const [ticketModalData, setTicketModalData] = useState<Ticket>();

    const openTicketModal = (ticket: Ticket): void => {
        setTicketModalData(ticket);
        setIsTicketModalOpen(true);
    };

    const closeTicketModal = (): void => {
        setIsTicketModalOpen(false);
    };

    const handleNextPagesURL = (nextPageURL?: paginationProps): void => {
        const nextPage = nextPageURL?.next.split('?')[1];
        setCurrentPageUrl(`/tickets/${nextPage}`);
    };

    const handlePreviousPagesURL = (prevPageURL?: paginationProps): void => {
        const prevPage = prevPageURL?.prev.split('?')[1];
        setCurrentPageUrl(`/tickets/${prevPage}`);
    };

    useEffect(() => {
        setCurrentPageUrl('/tickets');
    }, []);

    if (httpStatusCode && httpErrorMessage) {
        return <AppError code={httpStatusCode} message={httpErrorMessage} />;
    }

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
                            {allTickets.map((ticket: Ticket) => (
                                <tr key={ticket.id} onClick={() => openTicketModal(ticket)}>
                                    <td className={ticket.status}>{ticket.status}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{ticket.request_dt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableContainer>
            </BodyContent>
            {pages?.prev ? (
                <Pagination onClick={() => handlePreviousPagesURL(pages)}> Previous </Pagination>
            ) : (
                <Pagination>Previous</Pagination>
            )}
            {pages?.next ? (
                <Pagination onClick={() => handleNextPagesURL(pages)}> Next </Pagination>
            ) : (
                <Pagination>Next</Pagination>
            )}

            <TicketModal isOpen={isTicketModalOpen} onRequestClose={closeTicketModal} data={ticketModalData} />
        </Container>
    );
};

export default Dashboard;
