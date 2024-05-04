import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import AvatarComponent from './Avatar'
import { Menu } from 'lucide-react'

const Login = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='flex p-2 border-solid-[1px] rounded-full items-center gap-2 hover:shadow-lg'>
                    <Menu />
                    <AvatarComponent />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>List A Holiday</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Login