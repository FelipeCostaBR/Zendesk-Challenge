import axios from 'axios';
import { credentials, headers } from '../config/credentials.config';

describe('Get requester Endpoint', () => {
    it('should be able to get requester name from Zendesk API', async () => {
        const id = '902095139726';
        const UserURL = `${credentials.baseUrl}/users/${id}`;
        const { data } = await axios.get(UserURL, headers);
        const requester = data.user.name;
        expect(requester).toBe('The Customer');
    });
});
