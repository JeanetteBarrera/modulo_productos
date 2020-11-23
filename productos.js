// normalmnte si importamos un modulo otro archivo, se lo guarda en una variable con el mismo nombre para no confundir
// requerimos modulo y como parametro la ruta(ubicacion) del modulo.

let fs = require("fs");
//let archivo = "./prueba.json";
//let productos = JSON.parse(fs.readFileSync(archivo));

// creamos nuestro modulo con nuestros metodos.
module.exports = moduloProductos = {
    productos : JSON.parse(fs.readFileSync("./productos.json","utf-8")),

    mostrarLista : function() {
        return this.productos;
    },
    escribirProducto : function(name, price) {
        let lista = this.productos; // declaro una variable que tendrá como valor lo que me retorna el método leerJson
        let lastId = 1 // declaro una variable que almacenará el valor del id del último producto en nuestra lista de productos
        
        lista.map(function(producto){ // recorro con el método .map nuestro array de objetos.
            if(producto.id > lastId){ // éste condicional se encargará de preguntar sí, el id del elemento que está iterando es mayor al valor que tiene asignado la variable lastId...
                lastId = producto.id // se le asignará como valor el id de ese producto. Al finalizar de recorrer el array esa variable contendrá como valor el id del último producto. 
            }
        });
        nuevoProducto = {
            id: lastId +1,
            name : name,
            price : price
        }
        let actualizacion = this.productos;
        actualizacion.push(nuevoProducto);
        this.guardar(actualizacion);
    },
    guardar : function(datos){
        nuevoJson = JSON.stringify(datos);
        fs.writeFileSync("./productos.json", nuevoJson, "utf-8");
        return console.log("el archivo fue guardado correctamente");
    },
    eliminar : function(tipo) {
        let producto_eliminado = this.productos.filter(elementos => elementos.id != tipo);
        this.guardar(producto_eliminado);
        return("el producto fue eliminado exitosamente");

    },
    buscarXid : function(tipo) {
         let produc_Buscado = this.productos.filter(elementos => elementos.id == tipo);
        return produc_Buscado;
         
    },
    buscarXname : function(tipo) {
        let produc_Buscado2 = this.productos.filter(elementos => elementos.name.toLowerCase().includes(tipo.toLowerCase()));
        return produc_Buscado2;
    },
    filtrarXprecio : function(precioMinimo, precioMaximo){
        let lista = this.productos;
        let listaFiltrada = lista.filter((producto) => {
            return producto.price >= precioMinimo && producto.price <= precioMaximo  
        });
        return listaFiltrada;
    }
}

//console.log(listaDeProductos.filtrarXprecio(50, 60));