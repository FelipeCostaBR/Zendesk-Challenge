import axios from 'axios';
import { Request, Response } from 'express';
import { credentials, headers } from '../config/credentials.config';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    created_at: string;
    subject: string;
    description: string;
}

export default class TicketsController {
    public async show(_: Request, response: Response): Promise<Response> {
        const ticketsURL = `${credentials.baseUrl}/tickets.json?page[size]=25`;

        try {
            const { data } = await axios.get(ticketsURL, headers);

            const tickets = data.tickets.map((ticket: Ticket) => ({
                id: ticket.id,
                requester_id: ticket.requester_id,
                status: ticket.status,
                request_dt: ticket.created_at,
                subject: ticket.subject,
                description: ticket.description,
            }));

            const pagination = {
                prev: '',
                next: data.links.next,
            };

            return response.json({ tickets, pagination });
        } catch (error) {
            return response.json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }

    public async pagination(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { pageURL } = request.params;
        const ticketPagination = `${credentials.baseUrl}/tickets.json?${pageURL}`;

        try {
            const { data } = await axios.get(ticketPagination, headers);
            const hasMorePages = data.meta.has_more;

            if (hasMorePages) {
                const tickets = data.tickets.map((ticket: Ticket) => ({
                    id: ticket.id,
                    requester_id: ticket.requester_id,
                    status: ticket.status,
                    request_dt: ticket.created_at,
                    subject: ticket.subject,
                    description: ticket.description,
                }));

                const pagination = {
                    prev: data.links.prev,
                    next: data.links.next,
                };

                return response.json({ tickets, pagination });
            }

            const tickets = data.tickets.map((ticket: Ticket) => ({
                id: ticket.id,
                requester_id: ticket.requester_id,
                status: ticket.status,
                request_dt: ticket.created_at,
                subject: ticket.subject,
                description: ticket.description,
            }));

            const pagination = {
                prev: data.links.prev,
                next: '',
            };

            return response.json({ tickets, pagination });
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
