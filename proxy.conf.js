const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:5000/api',
        secure: false,
        log: 'debug',
       pathRewrite: {'^/api': ''}
    }
];

module.exports = PROXY_CONFIG;