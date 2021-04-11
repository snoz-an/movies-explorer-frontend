export class Api {
    constructor(options) {
      this._url = options.baseUrl;
    }
  
    _parseResult(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  
  
    getSavedMovies(token) {
      return fetch(`${this._url}/movies`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          return this._parseResult(res)
        })
    }

    postSavedMovies(movie) {
      return fetch(`${this._url}/movies`, {
        headers: {
          "Authorization": `Bearer ${this._token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      })
        .then(res => {
          return this._parseResult(res)
        })
    }
  
  
    getUserProfile(token) {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          return this._parseResult(res)
        })
    }
  
  
    setUserProfile(data, token) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email
        }),
      })
        .then(res => {
          return this._parseResult(res)
        })
    }
  
    addNewCard(data, token) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name: data.name,
          link: data.link
        }),
      })
        .then(res => {
          return this._parseResult(res)
        })
    }
  
  
   
    deleteCard(id, token) {
      return fetch(`${this._url}/cards/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          return this._parseResult(res)
        })
    }
  
  }
  
  
   const api = new Api({
    baseUrl: 'https://www.api.snozmovie.students.nomoredomains.monster',
  }
  )
  
  export default api