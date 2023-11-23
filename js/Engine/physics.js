import Component from "./component";
import Renderer from "./renderer";

class Physics extends Component
{
    constructor(velocity = {x:0, y:0},
                acceleration = {x:0, y:0},
                gravity = {x:0, y:300})
    {
        super();
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.gravity = gravity;
    }
    update(deltaTime)
    {
        this.velocity.x += this.acceleration.x * deltaTime;
        this.velocity.y += (this.acceleration.y + this.gravity.y) * deltaTime;
        //TODO why is deltaTime multiplied twice?
        this.gameObject.x += this.velocity.x * deltaTime;
        this.gameObject.y += this.velocity.y * deltaTime;
    }
    isColliding(otherPhysics)
    {
        const[left, right, top, bottom] = this.getBoundingBox();
        const[otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

        return left < otherRight &&
            right > otherLeft &&
            top < otherBottom &&
            bottom > otherTop;
        //Not considering any rotation
    }
    getBoundingBox()
    {
        const renderer = this.gameObject.getComponent(Renderer);
        const left = this.gameObject.x;
        const right = this.gameObject.x + renderer.width;
        const top = this.gameObject.y;
        const bottom = this.gameObject.y + renderer.height;

        return[left, right, top, bottom];
    }
}
export default Physics;