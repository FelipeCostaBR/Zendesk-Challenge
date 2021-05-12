import axios from 'axios';
import { credentials, headers } from '../config/credentials.config';

describe('Get Tickets Endpoint', () => {
    it('should be able to get tickets from Zendesk API', async () => {
        const ticketsURL = `${credentials.baseUrl}/tickets.json?page[size]=20`;
        const response = await axios.get(ticketsURL, headers);
        expect(response.status).toEqual(200);
    });
});

describe('Get View Endpoint', () => {
    it('should be able to get Views from Zendesk API', async () => {
        const ticketsURL = `${credentials.baseUrl}/views`;
        const response = await axios.get(ticketsURL, headers);
        expect(response.status).toEqual(200);
    });
});

describe('Get User Endpoint', () => {
    it('should be able to get user from Zendesk API', async () => {
        const id = '902095139726';
        const UserURL = `${credentials.baseUrl}/users/${id}`;
        const response = await axios.get(UserURL, headers);
        expect(response.status).toEqual(200);
    });
});
