const envConfig = () => ({
    app: {
        host: process.env.HOST,
        port: process.env.PORT || 8080,
    },
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
});

export default envConfig;
