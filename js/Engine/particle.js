//TODO does it make sense being here? where else could it be in structure?

import GameObject from "./gameobject";
import Renderer from "./renderer";
import Physics from "./physics";

class Particle extends GameObject
{
    constructor(x, y, width, height, color, duration)
    {
        super(x, y);
        this.duration = duration;
        this.addComponent(new Renderer(color, width, height));
        this.addComponent(new Physics({x:0,y:0}, {x:0,y:0}));
    }

    update(deltaTime)
    {
        this.duration -= deltaTime;
        if(this.duration <= 0)
        {
            this.game.removeGameObject(this);
        }
        //TODO dont forget to call update from super in each game object
        super.update(deltaTime);
    }

}
export default Particle;