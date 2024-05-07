async function getProducts(){
      return [
            {
              id: 1,
              name: "Product 1",
              description: "Description of Product 1",
              price: 10.99,
              imageUrl: "/assets/products/1.jpg",
            },
          
            {
              id: 2,
              name: "Product 2",
              description: "Description of Product 2",
              price: 19.99,
              imageUrl: "/assets/products/2.jpg",
            },
            {
              id: 3,
              name: "Product 3",
              description: "Description of Product 3",
              price: 29.99,
              imageUrl: "/assets/products/3.jpg",
            },
            {
              id: 4,
              name: "Product 3",
              description: "Description of Product 4",
              price: 29.99,
              imageUrl: "/assets/products/4.jpg",
            },
            {
              id: 5,
              name: "Product 3",
              description: "Description of Product 5",
              price: 29.99,
              imageUrl: "/assets/products/5.jpg",
            },
          ];
          
}

async function getBanners(){
     return [{ id: 1, imageUrl: "/assets/banners/1.jpg" }]
}
module.exports = {getProducts, getBanners}