const credentials = {
    baseUrl: 'https://felipesolutions.zendesk.com/api/v2',
    username: 'felipejsilvacosta@gmail.com/token',
    password: 'aXU49ZJRDywW1FFVMdiHg3P3KKl0y3w5eyV2jxWD',
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

export { credentials, token, headers };
