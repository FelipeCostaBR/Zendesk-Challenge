const credentials = {
    baseUrl: 'https://felipesolutions.zendesk.com/api/v2',
    username: 'felipejsilvacosta@gmail.com/token',
    password: 'CtDQG03Xnhsz3s5iPbUG1bhXCzaHqxydW4gGaVRi',
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
