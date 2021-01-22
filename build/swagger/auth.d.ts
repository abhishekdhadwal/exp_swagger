export declare const getAuthentication: (type?: 'basic') => {
    securityDefinitions: {
        basicAuth: {
            type: string;
        };
    };
    security: {
        basicAuth: any[];
    }[];
};
