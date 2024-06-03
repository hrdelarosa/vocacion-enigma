'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { insertUser } from "@/lib/data"

export async function login(formData: FormData): Promise<boolean> {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error)
        return false
        redirect('/login')
    }

    revalidatePath('/', 'layout')
    redirect('/account')
}

export async function signup(formData: FormData) {
    const supabase = createClient()
    
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.log(error)
        redirect('/error')
    }

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const newUser = {
        full_name: formData.get('fullname') as string,
        email: formData.get('email') as string,
        contraseña: formData.get('password') as string,
        matricula: formData.get('matricula') as string,
        preparatoria_id: formData.get('preparatoria') as string,
    }

    await insertUser(newUser)

    // fetch('http://localhost:3000/api/usuarios', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         full_name: formData.get('fullname') as string,
    //         email: formData.get('email') as string,
    //         contraseña: formData.get('password') as string,
    //         matricula: formData.get('matricula') as string,
    //         preparatoria_id: formData.get('preparatoria') as string
    //     })
    // })

    console.log(user)
    
    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function startTest(formData: FormData) {
    const data = {
        remember: formData.get('remember')
    }

    if (data) redirect('/test/start')
}