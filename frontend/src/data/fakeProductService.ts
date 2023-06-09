interface URL {
  url: string;
}

export interface IProducts {
  _id: number;
  name: string;
  photo: URL[];
  description: string;
  brand: string;
  price: number;
  qtInStock: number;
  qtSold: number;
}

const products: IProducts[] = [
  {
    _id: 1,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 2,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 3,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 4,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 5,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 6,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 7,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 8,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 9,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 10,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 11,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 12,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 13,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 14,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 15,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 16,
    name: "Óculos rounded cube",
    brand: "Ray-Ban",
    photo: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg",
      },
    ],
    description:
      "lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id",
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
];

export function getMovies() {
  return products;
}

export function getMovie(id: number) {
  return products.find((m) => m._id === id);
}

export function saveProduct(product: IProducts) {
  let productInDb: IProducts =
    products.find((m) => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.photo = product.photo;
  productInDb.description = product.description;
  productInDb.price = product.price;
  productInDb.qtInStock = product.qtInStock;
  productInDb.qtSold = product.qtSold;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteMovie(id: number) {
  let productInDb: IProducts = products.find((m) => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
