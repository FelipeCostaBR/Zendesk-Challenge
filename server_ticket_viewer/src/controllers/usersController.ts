import axios from 'axios';
import { Request, Response } from 'express';
import { credentials, headers } from '../config/credentials.config';

export default class UsersController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const UserURL = `${credentials.baseUrl}/users/${id}`;

        try {
            const { data } = await axios.get(UserURL, headers);
            const requester = data.user.name;

            return response.json({ requester });
        } catch (error) {
            return response.status(404).json({
                message: error.message,
                data: error.response.data,
                status: error.response.status,
            });
        }
    }
}
