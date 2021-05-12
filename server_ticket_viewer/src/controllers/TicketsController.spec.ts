import axios from 'axios';
import { credentials, headers } from '../config/credentials.config';

describe('Get ticket status', () => {
    it('should be able to get the total tickets status unsolved', async () => {
        const totalTicketsUnsolvedURL = `${credentials.baseUrl}/views/900035157166/count`;
        const { data } = await axios.get(totalTicketsUnsolvedURL, headers);
        const ticketsUnsolved = data.view_count.value;
        expect(ticketsUnsolved).toEqual(102);
    });
});
