package cordon;

class Vector2D<T> {
    public T x;
    public T y;

    public Vector2D(T x, T y) {
        if (x.getClass() != y.getClass()) {
            throw new IllegalArgumentException("x and y must be of the same type");
        } else if (x.getClass() != Integer.class && x.getClass() != Double.class && x.getClass() != Float.class) {
            throw new IllegalArgumentException("x and y must be of type Integer, Double, or Float");
        }
        
        this.x = x;
        this.y = y;
    }
}
