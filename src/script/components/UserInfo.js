export default class UserInfo {
    constructor({ userName, userJob }) {
        this._userName = document.querySelector(userName);
        this._userJob = document.querySelector(userJob);
    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent
        };


    }

    setUserInfo({ newName, newJob }) {
        this._userName.textContent = newName;
        this._userJob.textContent = newJob;
    }
}