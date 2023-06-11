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
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 2,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 3,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 4,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 5,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 6,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 7,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 8,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 9,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 10,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 11,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 12,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 13,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 14,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 15,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
  {
    _id: 16,
    name: 'Óculos rounded cube',
    brand: 'Ray-Ban',
    photo: [
      {
        url: 'https://cdn-images.farfetch-contents.com/13/34/65/34/13346534_15316438_322.jpg',
      },
      {
        url: 'https://static3.tcdn.com.br/img/img_prod/813275/oculos_de_sol_dourado_ray_ban_round_metal_rb3447l_7841_1_8a6b385eaf38d1636c3074ce287c9698.jpg',
      },
      {
        url: 'https://dazy28phnegyt.cloudfront.net/Custom/Content/Products/66/81/66816_oculos-de-sol-redondo-ray-ban-rb3546l-187-71-com-lentes-degrade-pr-12546-rb3546l-187-71_m2_637679924420629998.jpg',
      },
      {
        url: 'https://cdn.awsli.com.br/800x800/596/596553/produto/144686200/b5b59dca83.jpg',
      },
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur adipis Curabit et sapien sed diam non pro id',
    price: 100.0,
    qtInStock: 100,
    qtSold: 25,
  },
]

export function getMovies() {
  return products
}

export function getMovie(id: number) {
  return products.find((m) => m._id === id)
}

export function saveProduct(product: IProducts) {
  const productInDb: IProducts =
    products.find((m) => m._id === product._id) || {}
  productInDb.name = product.name
  productInDb.photo = product.photo
  productInDb.description = product.description
  productInDb.price = product.price
  productInDb.qtInStock = product.qtInStock
  productInDb.qtSold = product.qtSold

  if (!productInDb._id) {
    productInDb._id = Date.now()
    products.push(productInDb)
  }

  return productInDb
}

export function deleteMovie(id: number) {
  const productInDb: IProducts = products.find((m) => m._id === id)
  products.splice(products.indexOf(productInDb), 1)
  return productInDb
}
