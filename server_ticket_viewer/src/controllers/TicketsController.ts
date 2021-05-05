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

interface TotalTickets {
    solved: number;
    pending: number;
    open: number;
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
        const ticketsURL = `${credentials.baseUrl}/tickets.json`;

        try {
            const { data } = await axios.get(ticketsURL, headers);

            const totalTickets = data.tickets.reduce(
                (acc: TotalTickets, ticket: Ticket) => {
                    if (ticket.status === 'solved') {
                        acc.solved += 1;
                    } else if (ticket.status === 'pending') {
                        acc.pending += 1;
                    } else {
                        acc.open += 1;
                    }
                    return acc;
                },
                { solved: 0, pending: 0, open: 0 },
            );
            return response.json({
                total_tickets: totalTickets,
            });
        } catch (error) {
            return response.json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }
}
