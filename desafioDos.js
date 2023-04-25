//clase de nombre ProductManager, nos permitira trabajar con multiples prod
//Este debe agregar, consultar, modificar y eliminar un prod y manejarlo en persistencia de archivo 
//(basado en entregable 1)
//la clase debe contener una variable this.path, el q se inicializara desde el constructor 
// y debe recibir la ruta a trabajar desde el momento de generar su instancia 
//debe guardar obj con el sig formato 
//id se debe incrementar automaticamente, no enviarse desde el cuerpo
//title, description, price, thumbnail, code, stock
//

//metodo addProduct que recibe un obj con el formato especificado, asignarle id autoincrem y
//guardarlo en el arreglo(siempre guardarlo como un array en el archivo )
//al agregarlos debe creaerse un id autoincrementable

// metodo getProducts debe leer el archivo de prod y devolver el arreglo con todos los prod creados hasta ese momento

//metodo getProductById  debe recibir un id  y tras leer el archivo debe buscar el prod con el id 
//especificado y devolverlo en formato objeto

//metodo updateProduct debe recibir el id del prod a actualizar asi tmb como el campo a actualizar
//puede ser el obj completo como en una bd y debe actualizar el prod que tenga ese id en el archivo
//NO DEBE BORRARSE SU ID
//met deleteProduct el cual debe recibir un id y eliminar el prod que tenga ese id en el archivo
//(el profe dijo de usar los ...)

const fs= require ("fs")

class ProductManager {

    #id=0

    constructor(){

        this.path= fs.writeFileSync("./products.json", JSON.stringify([]));
        this.products= []


    }

  async   addProduct(){

    try{

        const producto= {
            title,
            description, 
            price,
            thumbnail, 
            code, 
            stock,
    
            }
    
            producto.id=  this.#getId()
           
            const actualProd= await this.getProducts()
            actualProd.push(producto)

            await fs.promises.writeFile("./products.json", JSON.stringify(actualProd))

    }

    catch(err){

        console.log("No se ha podido agregar el producto");

    }

        
    }

    #getId(){
        const idAum= this.#id;
        this.#id += 1;
        return(idAum)
    }

    async getProducts(){

      const actualProd=await fs.promises.readFileSync("./products.json","utf-8")
      return JSON.parse(actualProd)

    }

   async   getProductById(idProducts){

    try{

        await fs.promises.readFile("./products.json", "utf-8",(productoIndex))
            
        const productoIndex= this.products.findIndex((prod)=>prod.id===idProducts)

        if(productoIndex===-1){
            return ("not found")
        }
        
        const prod = this.products[productoIndex]


    }

    catch(err){


        console.log("Error");
    }
   }


   updateProduct(){

   }


   deleteProduct(){
    
   }






}

const prod= new ProductManager()
prod.addProduct("celular","dfdjh",56624,555,10)