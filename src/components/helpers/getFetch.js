const productos = [
    {
        id: 1,
        nombre: "Gorra Azul",
        categoria: "gorras",
        descripcion: "Gorra suave y moderna",
        img: "https://www.arteone.com.ar/imagenes/archivos/2015-09/737-32022342marino.jpg",
        precio: 1500,
        stock: 9
    },
    {
        id: 2,
        nombre: "Gorra Verde",
        categoria: "gorras",
        descripcion: "Gorra moderna",
        img: "https://http2.mlstatic.com/D_NQ_NP_843941-MLA50752392108_072022-W.jpg",
        precio: 1500,
        stock: 5
    },
    {
        id: 3,
        nombre: "Gorra Roja",
        categoria: "gorras",
        descripcion: "Gorra suave y moderna roja",
        img: "https://http2.mlstatic.com/D_NQ_NP_813893-MLA50752382031_072022-W.jpg",
        precio: 1500,
        stock: 15
    },
    {
        id: 4,
        nombre: "Remera Rock",
        categoria: "remeras",
        descripcion: "Remera rockera",
        img: "https://thewild.com.ar/wp-content/uploads/2018/10/remera-hombre-negra-we-will-rock-you.jpg",
        precio: 8500,
        stock: 35
    },
    {
        id: 5,
        nombre: "Remera Deportiva",
        categoria: "remeras",
        descripcion: "Para dama",
        img: "https://www.newbalance.com.ar/media/catalog/product/r/e/remera-mujer-new-balance-accelerate-short-sleeve-running-wt11220vco_nb_41_i_2__1.jpg",
        precio: 9000,
        stock: 25
    },
    {
        id: 6,
        nombre: "Remera deportiva",
        categoria: "remeras",
        descripcion: "Para hombre",
        img: "https://sporting.vtexassets.com/arquivos/ids/595877/4CU5992-010-1.jpg?v=637955604097070000",
        precio: 9000,
        stock: 11
    },
    {
        id: 7,
        nombre: "Zapatilla Topper",
        categoria: "zapatillas",
        descripcion: "Comoda y liviana",
        img: "https://sportotalar.vtexassets.com/arquivos/ids/192915-800-auto?v=637354341394430000&width=800&height=auto&aspect=true",
        precio: 15000,
        stock: 12
    },
    {
        id: 8,
        nombre: "Zapatilla Jaguar",
        categoria: "zapatillas",
        descripcion: "Deportiva",
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9302-blanco-t011-3e442d997f08533e5b16262115441280-1024-1024.jpg",
        precio: 12000,
        stock: 5
    },
    {
        id: 9,
        nombre: "Zapatilla Jaguar",
        categoria: "zapatillas",
        descripcion: "De lona",
        img: "https://static.dafiti.com.ar/p/jaguar-7321-195804-1-product.jpg",
        precio: 8500,
        stock: 25
    },
    {
        id: 10,
        nombre: "Zapatilla Nike",
        categoria: "zapatillas",
        descripcion: "Deportiva",
        img: "https://essential.vtexassets.com/arquivos/ids/576988-800-auto?v=637921838777700000&width=800&height=auto&aspect=true",
        precio: 35000,
        stock: 10
    }
]

export function getFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    })
}





let product = {}
export function getOneFetch(id) {
    product = productos.find(prod => prod.id === id)
}

export function getData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(product)
        }, 3000);
    })
}



