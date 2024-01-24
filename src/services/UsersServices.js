export const fetchUsers = async () => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users`

  const data = await fetch(USERS_API, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}

export const fetchUser = async (id) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users/${id}`
  const data = await fetch(USERS_API, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}

export const addUsers = async (user) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users`
  const data = await fetch(USERS_API, {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === 'on' ? 'masculino' : 'femenino',
      "tipo_usuario": 'alumno'
    })
  })

  return data.json()
}

export const updateUser = async (user, id) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users/${id}`
  const data = await fetch(USERS_API, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === "on" ? 'masculino' : 'femenino' || 'otro',
      "tipo_usuario": user.tipo_usuario
    })
  })

  return data
}

export const deleteUser = async (id) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users/${id}`
  try {
    await fetch(USERS_API, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
  } catch (err) {
    console.log(err)
  }
}

