import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Boy",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "./asset/boy1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Girl",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "./asset/girl1.jpg",
  },
];
