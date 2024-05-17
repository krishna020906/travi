import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import createUser from '../../../actions/createUser'
import Email from "next-auth/providers/email";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const providers = [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
]

const handler = NextAuth({
    providers : providers,
    callbacks : {
        async signIn({ user, account }: any) {
            const{email,image,name} = user
            const{provider,providerAccountId} = account
            const userData = {
                email : email,
                image: image,
                name: name,
                provider: provider,
                providerAccountId: providerAccountId,

            }
            if (email) {
                await createUser(userData)
            }
            return true
        },
    }
})

export { handler as GET, handler as POST }
