"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_component_1 = require("./like.component");
let component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log(`Likes count: ${component.likesCount}, isSelected: ${component.isSelected}`);
