import { useEffect, useState } from 'react';
import api from '../services/api';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    request_dt: string;
    subject: string;
    description: string;
}
interface TicketStatus {
    solved: number;
    pending: number;
    unsolved: number;
}
interface TicketProps {
    allTickets: Ticket[];
    pages: paginationProps | undefined;
    httpStatusCode?: number;
    httpErrorMessage?: string;
    ticketsStatus?: TicketStatus;
    requesterName: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setRequesterName: React.Dispatch<React.SetStateAction<string>>;
}
interface paginationProps {
    prev: string;
    next: string;
}

function useTickets(): TicketProps {
    const [allTickets, setAllTickets] = useState<Ticket[]>([]);
    const [pages, setPages] = useState<paginationProps>();
    const [ticketsStatus, setTicketsStatus] = useState<TicketStatus>();

    const [requesterName, setRequesterName] = useState('');

    const [url, setUrl] = useState('/tickets');
    const [httpStatusCode, setHttpStatusCode] = useState(0);
    const [httpErrorMessage, setHttpErrorMessage] = useState('');

    const fetchTickets = async (): Promise<void> => {
        try {
            const response = await api.get(url);
            const { tickets } = response.data;
            const { pagination } = response.data;
            const { allTicketsStatus } = response.data;
            const { requester } = response.data;

            if (pagination) {
                setPages(pagination);
            }

            if (tickets) {
                setAllTickets(tickets);
            }
            if (allTicketsStatus) {
                setTicketsStatus(allTicketsStatus);
            }
            if (requester) {
                setRequesterName(requester);
            }
        } catch (error) {
            if (error.message === `Network Error`) {
                setHttpStatusCode(500);
                setHttpErrorMessage('We are having problem with the server, please, try late !');
                return;
            }

            const statusCode = error.response.data.status;
            const errorMessage = error.response.data.data;

            setHttpStatusCode(statusCode);
            setHttpErrorMessage(errorMessage);
        }
    };

    useEffect(() => {
        setRequesterName('');
        fetchTickets();
    }, [url]);

    return {
        allTickets,
        pages,
        httpStatusCode,
        httpErrorMessage,
        ticketsStatus,
        requesterName,
        setUrl,
        setRequesterName,
    };
}

export default useTickets;
