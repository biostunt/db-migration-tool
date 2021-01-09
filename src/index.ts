import { Query } from 'mysql';
import { MysqlConnector } from './mysql'
const mysql = new MysqlConnector();


async function main() {
    await mysql.connect();
    const res = await mysql.execute("select * from profession")
    console.log(res);
}

main();