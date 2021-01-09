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
    public async execute(req: string) : Promise<any> {
        return new Promise((resolve) => {
            this.connection.query(req, (err: MysqlError, data) => {
                if (err) throw err;
                resolve(data);
            })
        })
    }
}

export default MysqlConnector;