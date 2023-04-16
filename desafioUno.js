//cada prod q gestione debe contar con las propiedades title, description, price, thumbnail, code, stock

//metodo addProduct el que agregara un prod al arreglo de prod inicial.
//validar q no se repita el campo "code", y q todos los campos sean obligatorios
//al agregarlos debe creaerse un id autoincrementable
// metodo getProducts debe devolver el arreglo con todos los prod creados hasta ese momento
//metodo getProductById  debe buscar en el arreglo el prod q coincida con el id
//en caso de no coincidir ningun id mostrar en consola un error not found 




class ProductManager {

    #id=0

    constructor(){
        this.products=[]; 
        this.title= title;
        this.description= description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock= stock;

    }

    
    addProduct(){

        const producto = this.#getId();
        this.products.push(producto)
    }

    #getId(){
        const Idacum= this.#id;
        this.#id += 1;
        return Idacum
    }
}

    
