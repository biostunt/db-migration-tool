import mysql, {Connection, MysqlError, Query} from 'mysql';
import Connector, { Configuration } from '../Classes/Connector';
import defaultConfig from './config.json';

class MysqlConnector extends Connector {
    
    private connection! : Connection;

    constructor(config?: Configuration) {
        super(config? config : defaultConfig);
    }
    public connect(): Promise<void> {
        this.connection = mysql.createConnection(this.configuration);
        return new Promise((resolve) => {
            this.connection.connect((err) => {
                if (err) throw err;
                resolve();
            });
        });
    }
    public async execute<T>(req: string, values? : any) : Promise<T> {
        return new Promise((resolve) => {
            this.connection.query(req, values? values: [], (err: MysqlError | null, data : T) => {
                if (err) throw err;
                resolve(data);
            })
        })
    }
    
}

export default MysqlConnector;