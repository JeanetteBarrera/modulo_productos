let moduloProductos = require("./productos.js");
let process = require("process");
let comando = process.argv[2];

switch (comando) {
    case "listar" :
        let productos = moduloProductos.mostrarLista();
        console.log("_ _ _ _ _ _ _ _ _ _");
        console.log("Lista de productos");
        console.log("_ _ _ _ _ _ _ _ _ _");

        productos.forEach((producto) =>{
        console.log("id: " + producto.id + " Productos: " + producto.name + " Precio: " + producto.price);
        });
        break;

    case "agregar" :
        
        let producto = process.argv[3];
        let precio = Number(process.argv[4]);

        if(producto === undefined || precio === undefined) {
            console.log("_________________________");
            console.log("Tenes que ingresar datos");
            console.log("________________________");
        }else {
            moduloProductos.escribirProducto(producto, precio);
            console.log("El producto fue añadido correctamente");
        }
        break;

    case "filtrar" :
        let precioMinimo = process.argv[3];
        let precioMaximo = process.argv[4];
        
        if(precioMinimo == undefined) {
            console.log("Tenes que escribir un precio minimo");
        }else if(precioMaximo == undefined) {
            console.log("Tenes que escribir un precio maximo");
        }else{
            let productosFiltrados = moduloProductos.filtrarXprecio(precioMinimo,precioMaximo);
            console.log("- - - - - - - - - - - - - - - - -");
            console.log("Estos son los productos filtrados");
            console.log("- - - - - - - - - - - - - - - - - ");
            productosFiltrados.forEach((producto) => {
                console.log("Producto: " + producto.name + " Precio: " + producto.price);
            });
        }
        break;
    case "eliminar" :
        let eliminarId = Number(process.argv[3]);
        if(eliminarId == undefined) {
            console.log("Ingresar el id del producto a eliminar");
        }
        moduloProductos.eliminar(eliminarId);
        
        console.log("El producto fue eliminado correctamente");
        break;

    case "buscarPorNombre" :
        let nombreProducto = process.argv[3];
        let productosBuscados = moduloProductos.buscarXname(nombreProducto);
        
        if(productosBuscados.length !== 0){
            console.log("Resultado de la busqueda");

            productosBuscados.forEach((producto) => {
                console.log("id: " + producto.id + " Producto" + producto.name + " Price: " + producto.price)
            });   
        }else{
            console.log("Producto no encontrado");
        }
        break;
    
    case "buscarPorId" :
        
        let idProducto = process.argv[3];
        let productoBuscados = moduloProductos.buscarXid(idProducto);
        
        if(productoBuscados.length !== 0){
            console.log("Resultado de la busqueda");

            productoBuscados.forEach((producto) => {
                console.log("id: " + producto.id + " Producto" + producto.name + " Price: " + producto.price)
            });   
        }else{
            console.log("Producto no encontrado");
        }

}