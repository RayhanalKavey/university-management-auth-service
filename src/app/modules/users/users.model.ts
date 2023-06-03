import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'
// 2. Create a Schema corresponding to the document interface.

type userModel = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Created and update filed will be automatically added by mongoDb.
    timestamps: true,
  }
)

// 3. Create a Model.
export const User = model<IUser, userModel>('User', userSchema)
