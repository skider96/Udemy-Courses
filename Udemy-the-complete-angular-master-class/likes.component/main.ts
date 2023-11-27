import { LikeComponent } from "./like.component";
let component = new LikeComponent(10, true);
component.onClick();

console.log(`Likes count: ${component.likesCount}, isSelected: ${component.isSelected}`);