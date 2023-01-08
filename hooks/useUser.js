import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { authStateChanged } from 'services/client'

export const STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
}

const useUser = () => {
    const [user, setUser] = useState(STATES.NOT_KNOWN)

    const router = useRouter()

    useEffect(() => {
        authStateChanged(setUser)
    }, [])

    useEffect(() => {
        user === STATES.NOT_LOGGED && router.push('/')
    }, [user])

    return user
}

export default useUser