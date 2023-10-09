import express from 'express';
import { sequelize } from '../database/database';
import cors from 'cors';

import Autenticacion from '../routes/autenticacion';


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: '*' }));


app.use('/api', Autenticacion);

async function main(): Promise<void> {
    try {
        await sequelize.authenticate();
        const servidor = app.listen( 3000, () => {
            console.log(`Server in port 3000`);
        });
        console.log('Conexion exitosa');
    } catch (error) {
        console.log('Error in connection', error)
    }
}

main();