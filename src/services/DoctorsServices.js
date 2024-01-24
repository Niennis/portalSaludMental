const formatDate = (date) => {
  console.log(date);
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export const fetchDoctors = async () => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/professionals`
  try {
    const data = await fetch(USERS_API, {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
    const response = data.json()
    // console.log(data.ok, data.status, data.statusText)
    return response
  } catch (err) {
    console.log(err)
  }
}

export const fetchDoctor = async (id) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/professionals/${id}`
  try {
    const data = await fetch(USERS_API, {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
    return data.json()
  } catch (err) {
    console.log(err)
  }
}

export const addDoctor = async (user) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/professionals`
  const body = {
    "nombre": user.name,
    "apellido": user.lastName,
    "telefono": user.mobile,
    "email": user.email,
    "contrasena": user.password,
    "fecha_nacimiento": formatDate(user.dateOfBirth.$d),
    "genero": user.gender,
    "especialidad": user.speciality.value,
    "tipo_usuario": 'profesional',
    "status": user.status
  }
  console.log(body);

  try {
    const data = await fetch(USERS_API, {
      method: "POST",
      cors: "no-cors",
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify(body)
    })

    console.log('STATUS', data.status, data.ok, data)
    const response = await data.json()
    console.log('response', response)
    if (!data.ok && response.message.includes('Duplicate entry')) return { err: 'Usuario duplicado' }

    return response
  } catch (err) {
    console.log('ERROR', err)
  }
}

export const updateDoctor = async (user, id) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/professionals/${id}`
  const body = {
    "nombre": user.name,
    "apellido": user.lastName,
    "telefono": user.mobile,
    "email": user.email,
    "contrasena": user.password,
    "fecha_nacimiento": formatDate(user.dateOfBirth.$d),
    "genero": user.gender,
    "tipo_usuario": 'profesional',
    "especialidad": user.speciality.value,
    "status": user.status
  }

  try {
    const data = await fetch(USERS_API, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify(body)
    })

    return data
  } catch (err) {
    console.log(err)
  }
}

export const changeStatus = async (id, status) => {
  const USERS_API = import.meta.env.VITE_USERS_API + `/api/users/${id}`
  try {
    const data = await fetch(USERS_API, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify({
        "status": status
      })
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

