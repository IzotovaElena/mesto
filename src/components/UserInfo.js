export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._name = userNameSelector
    this._info = userInfoSelector
  }
  
  getUserInfo() {
    return {
      userName: this._name.textContent,
      userInfo: this._info.textContent,
    }
  }
  
  setUserInfo({ userName, userInfo }) {
    this._name.textContent = userName
    this._info.textContent = userInfo
    }
  }