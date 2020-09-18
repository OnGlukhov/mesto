export default class Api {
    constructor({ baseUrl, headers = {} }) {
            this.baseUrl = baseUrl;
            this.headers = headers;
        }
        // Метод проверки промиса
    _checkPromise(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${tes.status}`)
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
                headers: this.headers
            })
            .then(res => this._checkPromise(res))
    }
    newCardAdd(item) {
        return fetch(`${this.baseUrl}/cards`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    name: item.Place,
                    link: item.Url
                })
            })
            .then(res => this._checkPromise(res));
    }


    // Загрузка профиля с сервера
    getUserInfo() {
            return fetch(`${this.baseUrl}/users/me`, {
                    headers: this.headers
                })
                .then((res) => this._checkPromise(res))
        }
        // Редактирование профиля
    patchProfileInfo(profileNewInfo) {
        return fetch(`${this.baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({
                    name: profileNewInfo.popup__text_type_author,
                    about: profileNewInfo.popup__text_type_profession
                })
            })
            .then(res => this._checkPromise(res));
    }
    removeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this.headers
            })
            .then(res => this._checkPromise(res));
    }

    addLike(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this.headers
            })
            .then(res => this._checkPromise(res));
    }

    removeLike(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this.headers
            })
            .then(res => this._checkPromise(res));
    }
    addAvatar(avatar) { // PATCH - запрос на обновление аватарки
        return fetch(`${this.baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(avatar)
            })
            .then(res => this._checkPromise(res));
    }
}