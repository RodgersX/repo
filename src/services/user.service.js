import { authHeader } from '../helpers'

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    }
    return fetch(`https://tejiriback.herokuapp.com/users/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
        //successful login if jwt exists in the response
        if(user.token) {
            //store user details & jwt token in local storage to keep user logged in
            localStorage.setItem('user', JSON.stringify(user))
        }
        return user
    })
}

function logout() {
    //remove token from local storage
    localStorage.removeItem('user')
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'applicaiotn/json'},
        body: JSON.stringify(user)
    }

    return fetch(`https://tejiriback.herokuapp.com/users/register`, requestOptions)
    .then(handleResponse)
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`https://tejiriback.herokuapp.com/users`, requestOptions)
    .then(handleResponse)
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers:   {...authHeader(), 'Content-Type': 'application/json'},
    }
    return fetch(`https://tejiriback.herokuapp.com/users/${id}`, requestOptions)
    .then(handleResponse)
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch(`https://tejiriback.herokuapp.com/users/${user.id}`, requestOptions)
    .then(handleResponse)
}

//reason for underscore is because delete is reserved in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }
    return fetch(`https://tejiriback.herokuapp.com/users/${id}`, requestOptions)
    .then(handleResponse)
}

function handleResponse(response) {
    return response.text()
    .then(text => {
        const data = text && JSON.parse(text)
        if(!response.ok) {
            if(response.status === 401) {
                //auto-logout if 401 is the response returned
                logout()
                location.reload(true)
            }
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return data
    })
}