import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this._link = this._popup.querySelector(".popup__photo")
    this._name = this._popup.querySelector(".popup__photo-title")
  }

  open({ link, name }) {
    super.open()
    this._name.textContent = name
    this._link.src = link
    this._link.alt = name
  }
}