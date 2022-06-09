
const botonAgregarAlCarrito = document.querySelectorAll('.boton__agregarAlCarrito');
botonAgregarAlCarrito.forEach((agregarAlCarrito) => {
    agregarAlCarrito.addEventListener('click', clickAgregarAlCarrito)
})

const containerFilaCarrito = document.getElementById('container__carritoTemporal');

function clickAgregarAlCarrito(event) {
    const botonEvento = event.target;
    const productoCarrito = botonEvento.closest('.container__fotoproducto__infoproducto__paginaproductos');

    const productoCarritoImagen = productoCarrito.querySelector('.foto__producto').src;
    const productoCarritoNombre = productoCarrito.querySelector('.info__producto').textContent;
    const productoCarritoPrecio = productoCarrito.querySelector('.precio__producto').textContent;

    agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio);
}

function agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio) {
    const filaCarrito = document.createElement('div');
    filaCarrito.className = 'container__filaCarrito';
    filaCarrito.innerHTML =
        `
        <div class="fila__productoCarrito" id="fila__productoCarrito">

            <img class="imagen__productoCarrito" src="${productoCarritoImagen}">

            <div class="container__parrafosFilaProductoCarrito">
                <p>Nombre: ${productoCarritoNombre} </p>
                <div class="container__precioCantidad">
                    <p>Precio: ${productoCarritoPrecio} </p>
                    <p>cantidad: <input class="input__cantidadProducto" type="number" value="1" id=""></p>
                </div>
            </div>
                
            <div class="container__botonEliminarProducto">
                <button class="boton__eliminarProducto" id="boton__eliminarProducto">Eliminar</button>
            </div>

        </div>
        `;

        document.getElementById('container__carritoTemporal').appendChild(filaCarrito);

}
