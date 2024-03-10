const CarritoCompra = require("./index");

let carritoInstance = new CarritoCompra;

describe("revisar clase carrito de compras", () => {
    it("deberia ser una clase", () => {
        expect(carritoInstance instanceof CarritoCompra).toBe(true);
    });
});

