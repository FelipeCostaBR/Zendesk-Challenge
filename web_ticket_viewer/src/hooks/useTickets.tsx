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

interface paginationProps {
    prev: string;
    next: string;
}

interface TicketProps {
    allTickets: Ticket[];
    pages: paginationProps | undefined;
    setCurrentPageUrl: React.Dispatch<React.SetStateAction<string>>;
}

function useTickets(): TicketProps {
    const [allTickets, setAllTickets] = useState([]);
    const [pages, setPages] = useState();
    const [currentPageUrl, setCurrentPageUrl] = useState('');

    const fetchTickets = async (): Promise<void> => {
        try {
            const response = await api.get(currentPageUrl);

            const { tickets } = response.data;
            const { pagination } = response.data;

            if (pagination) {
                setPages(pagination);
            }

            if (tickets) {
                setAllTickets(tickets);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, [currentPageUrl]);

    return {
        allTickets,
        pages,
        setCurrentPageUrl,
    };
}

export default useTickets;
