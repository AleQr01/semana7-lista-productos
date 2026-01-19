// Arreglo de productos
const productos = [
    {
        nombre: "Audífonos Inalámbricos",
        descripcion: "Bluetooth, buena calidad de sonido",
        precio: "$15"
    },
    {
        nombre: "Parlante Bluetooth",
        descripcion: "Sonido potente y portátil",
        precio: "$20"
    },
    {
        nombre: "Cargador Rápido",
        descripcion: "Carga segura y eficiente",
        precio: "$10"
    }
];

// Contenedor
const contenedor = document.getElementById("listaProductos");

// Crear productos dinámicamente
productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = producto.precio;
    precio.className = "precio";

    div.appendChild(nombre);
    div.appendChild(descripcion);
    div.appendChild(precio);

    contenedor.appendChild(div);
});
