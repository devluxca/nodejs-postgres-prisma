import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUsersGmail = async () => await prisma.user.findMany({
    where: {
        email: {
            endsWith: 'gmail.com'
        }
    }
})

const getUsersController = async () => {
    const users = await getUsersGmail()

    console.log(users)
}

getUsersController()