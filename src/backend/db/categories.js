import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Black Forest",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661457/istockphoto-1276645382-612x612_itydvz.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Strawberry",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684661645/three-strawberries-strawberry-leaf-white-background-114284301_grmb14.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Red Velvet",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684662127/EgglessRedVelvetCake2_grande_orpsga.webp",
  },
  {
    _id: uuid(),
    categoryName: "Butterscotch",
    imageUrl:
      "https://res.cloudinary.com/dzy0bigtz/image/upload/v1684662287/34662921_m-e1481140138408_rduauc.jpg",
  },
];
