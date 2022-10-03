class GameObject {
    contructor(id, transform, components) {
        this.id = id;
        this.components = [];
        this.components.push(transform, ...components);
    }
}

export default GameObject;