export interface Configuration {
    host: string;
    database: string;
    user: string;
    password: string;
}

export default abstract class Connector {

    configuration: Configuration;

    constructor(configuration : Configuration) {
        this.configuration = configuration;
    }
}