import axios from 'axios';
import { Request, Response } from 'express';
import { credentials, headers } from '../config/credentials.config';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    subject: string;
    description: string;
    created_at: string;
}

export default class TicketsController {
    public async show(_: Request, response: Response): Promise<Response> {
        const ticketsURL = `${credentials.baseUrl}/tickets.json?page[size]=20`;

        try {
            const { data } = await axios.get(ticketsURL, headers);

            const ticketsFormatted = data.tickets.map((ticket: Ticket) => ({
                id: ticket.id,
                requester_id: ticket.requester_id,
                status: ticket.status,
                subject: ticket.subject,
                description: ticket.description,
                request_dt: ticket.created_at,
            }));

            return response.json({
                tickets: ticketsFormatted,
            });
        } catch (error) {
            return response.json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }

    public async total(_: Request, response: Response): Promise<Response> {
        const totalTicketsUnsolvedURL = `${credentials.baseUrl}/views/900035157166/count`;
        const totalTicketsPendingURL = `${credentials.baseUrl}/views/900035157146/count`;
        const totalTicketsSolvedURL = `${credentials.baseUrl}/views/900035157226/count`;

        try {
            const ticketsUnsolved = await axios
                .get(totalTicketsUnsolvedURL, headers)
                .then(resp => resp.data.view_count.value);

            const ticketsPending = await axios
                .get(totalTicketsPendingURL, headers)
                .then(resp => resp.data.view_count.value);

            const ticketsSolved = await axios
                .get(totalTicketsSolvedURL, headers)
                .then(resp => resp.data.view_count.value);

            const totalTicketsStatus = {
                unsolved: ticketsUnsolved,
                pending: ticketsPending,
                solved: ticketsSolved,
            };

            return response.json({ totalTicketsStatus });
        } catch (error) {
            return response.json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }
}
