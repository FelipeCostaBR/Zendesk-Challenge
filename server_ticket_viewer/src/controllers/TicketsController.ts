import axios from 'axios';
import { Request, Response } from 'express';
import { credentials, headers } from '../config/credentials.config';
import formatTicket from '../utils/formatTicket';

export default class TicketsController {
    public async show(_: Request, response: Response): Promise<Response> {
        const ticketsURL = `${credentials.baseUrl}/tickets.json?page[size]=25`;

        try {
            const { data } = await axios.get(ticketsURL, headers);
            const tickets = formatTicket(data.tickets);

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
                const tickets = formatTicket(data.tickets);

                const pagination = {
                    prev: data.links.prev,
                    next: data.links.next,
                };

                return response.json({ tickets, pagination });
            }

            const tickets = formatTicket(data.tickets);

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
        const totalTicketsPendingURL = `${credentials.baseUrl}/views/900035157226/count`;
        // const totalTicketsSolvedURL = `${credentials.baseUrl}/views/900035157146/count`;

        try {
            const ticketsUnsolved = await axios
                .get(totalTicketsUnsolvedURL, headers)
                .then(resp => resp.data.view_count.value);

            const ticketsPending = await axios
                .get(totalTicketsPendingURL, headers)
                .then(resp => resp.data.view_count.value);

            // const ticketsSolved = await axios
            //     .get(totalTicketsSolvedURL, headers)
            //     .then(resp => resp.data.view_count.value);

            const totalTicketsStatus = {
                unsolved: ticketsUnsolved,
                pending: ticketsPending,
                // solved: ticketsSolved,
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
