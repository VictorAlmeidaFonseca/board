import { v4 as uuidv4 } from 'uuid'

export const generateToken = () => uuidv4().split('-')[1]