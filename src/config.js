const config = { 
    apiPath: 'http://localhost:3001',
    headers: () => {
        const token = localStorage.getItem('token');
        return {
            headers: {
                Authorization: token || '', // Ensure an empty string is sent if no token
            },
        };
    },
};

export default config;


