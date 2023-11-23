class GameObject
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
        this.components = [];
    }
    addComponent()
    {
        this.components.push(component);
        component.gameObject = this;
    }
    update(deltaTime)
    {
        for(const component of this.components)
        {
            component.update(deltaTime);
        }
    }
    draw(ctx)
    {
        for(const component of this.components)
        {
            component.draw(ctx);
        }
    }
    getComponent()
    {
        return this.components.find((component)=> component instanceof componentClass);
        //TODO can try using streams instead and/or different "finds" in js
    }
}
export default GameObject;