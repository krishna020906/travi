import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import AvatarComponent from './Avatar'
import { Menu } from 'lucide-react'
import { signIn,signOut,useSession } from 'next-auth/react';
import Image from 'next/image';


const Login = () => {
    const { data : session } = useSession()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='flex p-2 border-solid-[1px] rounded-full items-center gap-2 hover:shadow-lg'>
                    <Menu />
                    {
                        session && session.user ? (
                            <Image src= {session.user.image} alt='user-login-image' width={32} height={32}></Image>
                        ) : <AvatarComponent />
                    } 
                    
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {
                    session ? (
                        <DropdownMenuItem onClick={() => signOut({
                            callbackUrl: 'https://localhost:3000'
                        })}>Sign Out</DropdownMenuItem>
                     ) : (
                        <DropdownMenuItem onClick={() => signIn('google', {
                            callbackUrl: 'https://localhost:3000'
                        })}>Login</DropdownMenuItem>

                     )
                }
                
                
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>List A Holiday</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Login