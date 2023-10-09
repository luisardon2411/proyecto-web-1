import { Request, Response, Router } from "express";
import User from '../models/usuario';


const router = Router();



router.post('/autenticacion', async ( { body: { username, password } } , res: Response) => {
    try {
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            return res.status(200).json({user});
        }
        return res.status(401).json({ message: 'usuario y/o contraseña incorrectas' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
})




export default router;