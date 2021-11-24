export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._name = userName
    this._info = userInfo
  }
  
  getUserInfo() {
    return {
      userNameValue: this._name.textContent,
      userInfoValue: this._info.textContent,
    }
  }
  
  setUserInfo( userNameValue, userInfoValue ) {
    this._name.textContent = userNameValue.value
    this._info.textContent = userInfoValue.value
    }
  }