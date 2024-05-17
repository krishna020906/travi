'use server'
import prisma from '../lib/dbConnect'
 async function createUser (userData: any) {
    try {
        const userInfo = await prisma.User.create({
            data: userData
        })
        return {
            message: "Successfully Saved",
            data,
        }
    } catch (err:any) {
        return {
            message: "Failed To Create User",
            err,
        }
    }
 }
 export default createUser