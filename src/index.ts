import { Query } from 'mysql';
import { MysqlConnector } from './mysql'
import {PgConnector} from './postgresql';
const mysql = new MysqlConnector();
const postgre = new PgConnector();

async function main() {
    await mysql.connect();
    await postgre.connect();
    const res1 = await mysql.execute("select 'hello world' as just_row");
    const res2 = await postgre.execute("select 'hello world' as just_row");
    console.log(res1, res2);
}

main();