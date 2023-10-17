import LogoutButton from '@/components/LogoutButton'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Onboarding() {

    const supabase = createServerComponentClient({cookies})
    const { data: {session} } = await supabase.auth.getSession()

    if(!session) {
        redirect('/')
    }

    return (
        <div className='bg-white w-full h-screen'>
         <LogoutButton/>
        <p>Hello</p>
        </div>
    )
}
