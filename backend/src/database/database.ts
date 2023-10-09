import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// init config
config();

export const sequelize = new Sequelize(
    `Proyecto`,
    `administrador`,
    `Octubre`,
    {
        host: `192.168.177.133`,
        dialect: 'mysql',
        logging: false,
        timezone: '-06:00'
    }

)