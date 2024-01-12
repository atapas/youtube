const data = [
  {
    id: crypto.randomUUID(),
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    cover: "Fjallraven.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    cover: "mcps.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    cover: "mcj.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    cover: "mcsf.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: crypto.randomUUID(),
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    cover: "jhcb.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  }
];

const getProducts = () => {
  return data;
}

export {getProducts};
