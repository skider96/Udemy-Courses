"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
class LikeComponent {
    constructor(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    onClick() {
        this._likesCount += this._isSelected ? -1 : +1;
        this._isSelected = !this._isSelected;
    }
    get isSelected() {
        return this._isSelected;
    }
    get likesCount() {
        return this._likesCount;
    }
}
exports.LikeComponent = LikeComponent;
