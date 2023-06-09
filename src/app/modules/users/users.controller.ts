import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      status: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: false, message: error })
  }
}
export default { createUser }
