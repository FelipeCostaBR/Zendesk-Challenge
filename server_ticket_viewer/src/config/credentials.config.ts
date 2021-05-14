const credentials = {
    baseUrl: process.env.BASE_URL,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
};

const token = Buffer.from(
    `${credentials.username}:${credentials.password}`,
    'utf8',
).toString('base64');

const headers = {
    headers: {
        Authorization: `Basic ${token}`,
    },
};

export { credentials, headers };
