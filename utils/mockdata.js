const products = [
  { "id": 1, "marca": "Adidas", "nombre": "Ultra Boost", "precio": 120.99, "genero": "Hombre", "image":"https://essential.vtexassets.com/arquivos/ids/1251668-1200-auto?v=638419261123230000&width=1200&height=auto&aspect=true" },
  { "id": 2, "marca": "Nike", "nombre": "Air Max 270", "precio": 150.50, "genero": "Mujer", "image": "https://http2.mlstatic.com/D_NQ_NP_611050-MLA73758034150_012024-O.webp" },
  { "id": 3, "marca": "Adidas", "nombre": "Superstar", "precio": 80.00, "genero": "Hombre", "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e85a8a6600634af58ca0af1d8262b80b_9366/Zapatillas_Superstar_XLG_Negro_ID4656_01_standard.jpg" },
  { "id": 4, "marca": "Nike", "nombre": "React Element 55", "precio": 110.75, "genero": "Mujer", "image": "https://www.digitalsport.com.ar/files/products/5d56d10cbaf75-475695-500x500.jpg" },
  { "id": 5, "marca": "Adidas", "nombre": "Nite Jogger", "precio": 95.49, "genero": "Hombre", "image": "https://http2.mlstatic.com/D_NQ_NP_809174-MLA71042460514_082023-O.webp" },
  { "id": 6, "marca": "Nike", "nombre": "Air Force 1", "precio": 90.25, "genero": "Mujer", "image": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc865b0a2/products/NI_315115-112/NI_315115-112-1.JPG" },
  { "id": 7, "marca": "Adidas", "nombre": "Yeezy Boost 350", "precio": 220.00, "genero": "Hombre", "image": "https://www.bimstoreph.com/cdn/shop/products/1_174_2a777543-edea-4314-9ff7-a825ac1bd73e_1024x1024.jpg?v=1635205902" },
  { "id": 8, "marca": "Nike", "nombre": "Blazer Mid", "precio": 75.80, "genero": "Mujer", "image": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw59308217/products/NI_BQ6806-100/NI_BQ6806-100-1.JPG" },
  { "id": 9, "marca": "Adidas", "nombre": "Ozweego", "precio": 110.00, "genero": "Hombre", "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4cde377d04d4b818dd4435d93e1b4fb_9366/Zapatillas_OZWEEGO_Gris_ID9822_01_standard.jpg" },
  { "id": 10, "marca": "Nike", "nombre": "Air Zoom Pegasus", "precio": 115.30, "genero": "Mujer", "image": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6f450293/products/NIDV3854-102/NIDV3854-102-1.JPG" },
  { "id": 12, "marca": "Nike", "nombre": "Joyride Run Flyknit", "precio": 160.00, "genero": "Mujer", "image": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdec8cb87/products/NI_AQ2730-011/NI_AQ2730-011-1.JPG" },
  { "id": 13, "marca": "Adidas", "nombre": "NMD XR1", "precio": 140.75, "genero": "Hombre", "image": "https://www.sneakersmagazine.es/wp-content/uploads/2016/08/adidas-originals-nmd-xr1-white-sneaker-1-768x512.jpg" },
  { "id": 14, "marca": "Nike", "nombre": "Air Max 97", "precio": 170.99, "genero": "Mujer", "image": "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/9/2/921733-001_0.jpg" },
  { "id": 15, "marca": "Adidas", "nombre": "Solar Boost", "precio": 130.45, "genero": "Hombre", "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc34556d2e2742edbd67afc400f417e7_9366/Zapatillas_Solarboost_5_Blanco_GW1962_01_standard.jpg" },
  { "id": 16, "marca": "Nike", "nombre": "Free RN 5.0", "precio": 99.60, "genero": "Mujer", "image": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/A/Q/AQ1289-003_0_11.jpg" },
  { "id": 17, "marca": "Adidas", "nombre": "Alphabounce", "precio": 90.80, "genero": "Hombre", "image": "https://www.opensports.com.ar/media/catalog/product/cache/072d5146ae4cbf4250016550f4b98156/H/P/HP6150_0.jpg" },
  { "id": 18, "marca": "Nike", "nombre": "Epic React Flyknit", "precio": 130.00, "genero": "Mujer", "image": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb4369c56/products/NI_BQ8927-104/NI_BQ8927-104-1.JPG" },
  { "id": 19, "marca": "Adidas", "nombre": "Terrex Swift R2 GTX", "precio": 150.25, "genero": "Hombre", "image": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/100010cm7487001-1.jpg" },
  { "id": 20, "marca": "Nike", "nombre": "Air VaporMax", "precio": 190.30, "genero": "Mujer", "image": "https://essential.vtexassets.com/arquivos/ids/1071205-1200-auto?v=638367279762970000&width=1200&height=auto&aspect=true" },

];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1500)
    })
  }
  export const getProductsAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });
  };
  
  
  export const getProductAsyncById = (id) => {
  const product = products.find((p) => p.id === id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      product ? resolve(product) : reject("Product not found");
    }, 1500);
  });
};

  
export const getCategoriesAsync = () => {
  const categories = products.map((product) => product.nombre);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 1500);
  });
};

