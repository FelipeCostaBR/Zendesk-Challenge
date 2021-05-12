/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    created_at: string;
    subject: string;
    description: string;
}

const formatDate = (date: string) => {
    const stringToDate = new Date(date);
    const dateFormatted = stringToDate.toISOString().split('T')[0];

    return dateFormatted;
};

const formatTicket = (tickets: Ticket[]) => {
    const ticketFormatted = tickets.map((ticket: Ticket) => ({
        id: ticket.id,
        requester_id: ticket.requester_id,
        status: ticket.status,
        request_dt: formatDate(ticket.created_at),
        subject: ticket.subject,
        description: ticket.description,
    }));

    return ticketFormatted;
};

export default formatTicket;
