class GameObject {
    constructor(id, transform, components) {
        this.id = id;
        this.transform = transform;
        components.forEach((component) => {
            this[component.constructor.name] = component;
        });
    }
}

export default GameObject;