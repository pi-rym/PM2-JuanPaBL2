class CarritoCompra{
    constructor(){
        this.carrito = [];
    }
    agregarProducto(producto){
        this.carrito.push(producto);
    }
    calcularTotal(){
        const totalCompra = this.carrito.reduce((acumulador, elemento) => acumulador + elemento, 0); 
        return totalCompra;
    }
    aplicarDescuento(porcentaje){
        const descuentoAplicado = this.calcularTotal() - (this.calcularTotal() * (porcentaje / 100));
        return descuentoAplicado;
    }
}