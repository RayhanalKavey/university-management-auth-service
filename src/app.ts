import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

// import usersService from './app/modules/users/users.service'

const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
//for encoded data
app.use(express.urlencoded({ extended: true }))

//Application route
app.use('/api/vi/users', userRouter)
//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})
// app.get('/', async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '999',
//     password: '111222333',
//     role: 'student',
//   })
//   res.send('Hello World!')
// })

export default app
