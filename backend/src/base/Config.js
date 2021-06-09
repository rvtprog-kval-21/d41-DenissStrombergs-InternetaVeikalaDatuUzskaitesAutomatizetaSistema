export const CONFIG = {
    DATABASE: [
        'postgres',
        'postgres',
        '',
        {
            dialect: 'postgres',
            host: 'localhost',
            underscored: true,
            logging: false
        }
    ],
    API: 'http://localhost:3001',
    GENERATE_SAMPLE_DATA: true,
    GENERATE_SCHEMA: false
}

export default CONFIG
