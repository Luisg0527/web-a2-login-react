import { useCallback, useState } from 'react'

const API_URL = "https://web-a5-hashing-production.up.railway.app"
//const API_URL = "http://localhost:8000"

const useAdmin = (token) => {
  const [users, setUsers] = useState([])

  const getUsers = useCallback(async () => {
    if (!token) return
    const res = await fetch(API_URL + "/users", {
      headers: { authorization: token }
    })
    const data = await res.json()
    setUsers(Array.isArray(data) ? data : data.users ?? [])
  }, [token])

  const delUser = async (id) => {
    setUsers((prev) => prev.filter((u) => u._id !== id))
    await fetch(API_URL + "/users/" + id, {
      headers: { authorization: token },
      method: "DELETE"
    })
  }

  const addUser = async (newUser) => {
    const res = await fetch(API_URL + "/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: token
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json()
    const added = data.users ?? data.user
    if (added) {
      setUsers((prev) => [...prev, added])
    }
  }

  const clearUsers = () => setUsers([])

  return { users, getUsers, delUser, addUser, clearUsers }
}

export default useAdmin
