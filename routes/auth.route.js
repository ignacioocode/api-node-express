import express from 'express'
import { login, register } from '../controllers/auth.controller.js'
import { body } from 'express-validator'
import { validationResulsExpress } from '../middleware/validationResultsExpress.js'
const router = express.Router()

router.post('/register',[
    body('email', 'Formato email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', 'minimo 6 caracteres')    
        .trim()
        .isLength({min: 6}),
    body('password', 'formato de password no valido')
        .custom((value, {req}) => {
            if(value !== req.body.repassword){
                throw new Error('no coinciden las contraseñas')
            }
            return value
        })
],
validationResulsExpress,
register)

router.post('/login',[
    body('email', 'Formato email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', 'minimo 6 caracteres')
        .trim()
        .isLength({ min: 6 }),
],
validationResulsExpress,
login)

export default router