import axios from 'axios';
import { Request, Response } from 'express';
import { credentials, headers } from '../config/credentials.config';
import formatTicket from '../utils/formatTicket';

export default class TicketsController {
    public async show(_: Request, response: Response): Promise<Response> {
        const ticketsURL = `${credentials.baseUrl}/tickets.json?page[size]=20`;

        try {
            const { data } = await axios.get(ticketsURL, headers);
            const tickets = formatTicket(data.tickets);

            const pagination = {
                prev: '',
                next: data.links.next,
            };

            return response.json({ tickets, pagination });
        } catch (error) {
            return response.status(404).json({
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
            return response.status(404).json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }

    public async total(_: Request, response: Response): Promise<Response> {
        const views = `${credentials.baseUrl}/views/`;

        try {
            const ticketView = await axios
                .get(views, headers)
                .then(resp =>
                    resp.data.views.filter(view => view.position === 0),
                );

            const ticketViewFirstPosition = ticketView[0];

            const totalTicketsPendingURL = `${credentials.baseUrl}/views/${ticketViewFirstPosition.id}/count`;
            console.log('path', totalTicketsPendingURL); // right

            const ticketUnsolved = await axios
                .get(totalTicketsPendingURL, headers)
                .then(resp => resp.data.view_count.value);

            // const allTicketsStatus = {
            //     unsolved: ticketsUnsolved,
            //     pending: ticketsPending,
            // };

            return response.json({ ticketUnsolved });
        } catch (error) {
            return response.status(404).json({
                message: error.message,
                data: error.response.data.error,
                status: error.response.status,
            });
        }
    }
}
