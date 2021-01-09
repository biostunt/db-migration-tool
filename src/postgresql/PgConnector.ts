import {Client} from 'pg'
import Connector, { Configuration } from '../Classes/Connector';
import defaultConfig from './config.json';

export default class PgConnector extends Connector {

    private connection: Client;

    constructor(config?: Configuration) {
        super(config ? config : defaultConfig);
        this.connection = new Client(config);
    }

    async connect(): Promise<void> {
        await this.connection.connect();
    }

    async close(): Promise<void> {
        this.connection.end();
    }

    async execute(req: string): Promise<any> {
        return await this.connection.query(req);
    }

}