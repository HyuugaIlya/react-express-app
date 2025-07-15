import { Response, Request } from 'express'
import { emailService } from '../services/email-service'
import { HTTP_STATUSES } from '../utils/common-utils'

export const handleSendEmail = async (req: Request, res: Response) => {
    const { email, message, subject } = req.body

    try {
        await emailService.sendEmail(email, subject, message)
        res.sendStatus(HTTP_STATUSES.NO_CONTENT)
        return
    } catch (error) {
        console.log(error)
        res.status(HTTP_STATUSES.BAD_REQUEST).send({
            message: 'Error',
        })
        return
    }
}