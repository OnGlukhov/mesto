export default class UserInfo {
    constructor({ userName, userJob, profileAvatarSelector }) {
        this._userName = document.querySelector(userName);
        this._userJob = document.querySelector(userJob);
        this._userAvatar = document.querySelector(profileAvatarSelector)

    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        };
    }

    setUserInfo(newProfilInfo) {
        this._userName.textContent = newProfilInfo.name;
        this._userJob.textContent = newProfilInfo.about;

    }
    setUserAvatar(avatar) {

        this._userAvatar.src = avatar;

    }
}