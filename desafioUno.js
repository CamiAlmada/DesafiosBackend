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
        

    }

    
    addProduct(title, description, price, thumbnail, code, stock){

        if (!title || !description|| !price || !thumbnail || !code|| !stock){
            console.log("Todos los campos son obligatorios");
        }
        let filter=this.products.filter((p)=>p.code===code)

        if(filter.length>0){
          console.log("Ese código ya existe"); 
          return     
        }

        const producto ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

         producto.id = this.#getId();
         this.products.push(producto)
    }

    #getId(){
        const Idacum= this.#id;
        this.#id += 1;
        return Idacum
    }

     getProducts(){
         return this.products
     }

     getProductById(idProductos){

        const productoIndex= this.products.findIndex((prod)=>prod.id===idProductos)

        if(productoIndex ===-1){
            ("not found ")
            return
        }

        const prod= this.products[productoIndex]
        // else{
        //     console.log(`El producto buscado es : ${this.products[productoIndex]} `);
           
        // }
        
     }

}

const productos = new ProductManager();

productos.addProduct("celular","Alta gama",80000, ".../images/images.jpg", 158778,10)
productos.addProduct("tablet","marca sony",50000, ".../images/images.jpg", 158778,10)
productos.addProduct("tablet","",50000, ".../images/images.jpg", 158779,10)
productos.getProductById(3)

console.log(productos.getProducts());
console.log(productos.getProductById());
    

