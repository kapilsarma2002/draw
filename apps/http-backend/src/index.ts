import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config'
import { middleware } from './middleware'

const app = express()
const PORT = 3001

app.post('/signup', (req: Request, res: Response) => {
	res.json({
		userId: '123'
	})
})
app.post('/signin', (req: Request, res: Response) => {

	const userId = '123'
	const token = jwt.sign({
		userId
	}, JWT_SECRET)

	res.json({
		token
	})

})
app.post('/room', middleware, (req: Request, res: Response) => {
	res.json({
		roomId: '123'
	})
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})