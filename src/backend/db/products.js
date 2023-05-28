import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Black Forest Cake",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684657796/cake_hmsl0h.png",
    rating: "4.5",
    totalRatings: 25,
    price: 499,
    categoryName: "Black Forest",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: true,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Black N White Chocolate Cake",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684659264/sq-black-and-white-blackforest-cake-cake2279blac-A_4_qbuofg.avif",
    rating: "3.9",
    totalRatings: 45,
    price: 599,
    categoryName: "Black Forest",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Exotic Layer Black Forest Cake",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684659626/squ-choco-black-forest-cake-cake888blac-A_a8nu5a.avif",
    rating: "2.3",
    totalRatings: 32,
    price: 699,
    categoryName: "Black Forest",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Square Choco Black Forest Cake",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684659730/sq-square-shaped-choco-filled-black-forest-cake-cake2278blac-A_4_p0lffp.avif",
    rating: "4.0",
    totalRatings: 15,
    price: 540,
    categoryName: "Black Forest",
    isOutOfStock: true,
    offerPercentage: 10,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Sprinkle Of Premium Chocolates",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684901692/sprinkle-of-premium-chocolates_1_m55nei.webp",
    rating: "3.0",
    totalRatings: 15,
    price: 540,

    isOutOfStock: true,
    offerPercentage: 10,
    isBestSeller: false,
    itemType: "chocolates",
  },
  {
    _id: uuid(),
    title: "Pretty Pink Rose Strawberry Cake ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684659904/sq-strawberry-rose-cake0025frui-AA_xikwx7.avif",
    rating: "5.0",
    totalRatings: 57,
    price: 899,
    categoryName: "Strawberry",
    isOutOfStock: false,
    offerPercentage: 15,
    isBestSeller: true,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Pink Hearty Rose Strawberry Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660066/sq-pink-hearty-rose-strawberry-cake-cake2536stra-A_1_rbo4mv.avif",
    rating: "2.7",
    totalRatings: 14,
    price: 1699,
    categoryName: "Strawberry",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Round Choco Strawberry Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660214/sq-choco-strawberry-cake0004chfr-AA_elv9ji.avif",
    rating: "3.9",
    totalRatings: 20,
    price: 350,
    categoryName: "Strawberry",
    isOutOfStock: true,
    offerPercentage: 10,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Magical Strawberry Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660440/sq-strawberry-cream-cake-1-cake0752crem-A_1_wpd6o5.avif",
    rating: "4.2",
    totalRatings: 45,
    price: 1299,
    categoryName: "Strawberry",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: true,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Delectable Chocolates In Floral Box- 21 Pcs",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684901737/delectable-chocolates-in-floral-box-21-pcs_1_r0mkjt.jpg",
    rating: "4.2",
    totalRatings: 35,
    price: 1299,
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "chocolates",
  },
  {
    _id: uuid(),
    title: "Red Velvet Coffee Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660517/sq-red-velvet-choco-coffee-cake0040rchc-AA_bfyqbc.avif",
    rating: "3.5",
    totalRatings: 100,
    price: 699,
    categoryName: "Red Velvet",
    isOutOfStock: false,
    offerPercentage: 2,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Red Velvet Cream Cake",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660660/sq-red-velvet-cake0027reex-AA_0_crocmq.avif",
    rating: "4.0",
    totalRatings: 24,
    price: 599,
    categoryName: "Red Velvet",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: true,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Red Velvet Heart Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660771/sq-red-velvet-heart-cake-cake1705redv-B_0_ebjv5o.avif",
    rating: "3.9",
    totalRatings: 34,
    price: 1499,
    categoryName: "Red Velvet",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Red Velvet Cake With Choco Sticks  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684660867/sq-red-velvet-cake-with-choco-sticks-cake1630redv-A_0_gaw42c.jpg",
    rating: "4.5",
    totalRatings: 34,
    price: 499,
    categoryName: "Red Velvet",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Choco Treat Basket",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684901779/loaded-with-chocolates_1_gjbwhr.jpg",
    rating: "4.5",
    totalRatings: 34,
    price: 799,
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: true,
    itemType: "chocolates",
  },
  {
    _id: uuid(),
    title: "Round Shape Butterscotch Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661011/sq-butterscotch-cake0003butt-AA_o3rcbk.avif",
    rating: "2.3",
    totalRatings: 23,
    price: 499,
    categoryName: "Butterscotch",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Butterscotch Caramel Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661156/round-shaped-butterscotch-cake-4-cake892butt-AA_znaxaj.avif",
    rating: "4.0",
    totalRatings: 54,
    price: 599,
    categoryName: "Butterscotch",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Butterscotch Cake With Chocolate Hints  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661232/sq-round-shaped-butterscotch-cake-1-cake0617butt-A_0_pbxaju.avif",
    rating: "4.5",
    totalRatings: 33,
    price: 499,
    categoryName: "Butterscotch",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Heart Shaped Butterscotch Nougat  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661317/sq-heart-shaped-butterscotch-cake-3-cake0622hbut-A_0_jnxx7x.avif",
    rating: "4.4",
    totalRatings: 22,
    price: 599,
    categoryName: "Butterscotch",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: true,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Delicious Pineapple Cream Cake  ",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1684904733/delicious-pineapple-cream-cake-half-kg_1_xcdxy5.jpg",
    rating: "3.4",
    totalRatings: 22,
    price: 599,
    categoryName: "Pineapple",
    isOutOfStock: false,
    offerPercentage: 5,
    isBestSeller: false,
    itemType: "cake",
  },
  {
    _id: uuid(),
    title: "Chocolate Overload Gift Box",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684901837/chocolate-overload-gift-box_1_l00sqs.webp",
    rating: "2.4",
    totalRatings: 22,
    price: 1499,
    isOutOfStock: false,
    offerPercentage: 15,
    isBestSeller: true,
    itemType: "chocolates",
  },
];
