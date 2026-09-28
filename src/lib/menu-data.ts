import bentoCake from "@/assets/bento_cake.webp";
import blueCupcakes from "@/assets/blue_cupcakes.webp";
import cadburyAsset from "@/assets/cadbury-ganache-clear.webp";
import cheesecakesAsset from "@/assets/cheesecakes.webp";
import dessertsAsset from "@/assets/desserts.webp";
import fancyCakesAsset from "@/assets/fancy-cakes-platter.webp";
import pieAsset from "@/assets/pie-menu.webp";
import samoosaAsset from "@/assets/samoosa-menu.webp";
import savouryMenuAsset from "@/assets/savoury-menu.webp";

export type MenuItem = { name: string; price: string };

export type MenuSection = {
  title: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  description?: string;
  note?: string;
  items: MenuItem[];
};

export const sweetMenu: MenuSection[] = [
  {
    title: "Fancy Cakes Platter",
    image: fancyCakesAsset,
    width: 370,
    height: 259,
    alt: "Assorted fancy cakes platter",
    description:
      "A beautiful mixed platter — pastry horns, caramel tarts, chocolate eclairs, lemon curd tarts, granadilla & pineapple tarts, lamingtons, milk tarts, vanilla cupcakes and snow balls.",
    items: [
      { name: "Platter of 100", price: "R560" },
      { name: "Platter of 50", price: "R300" },
    ],
  },
  {
    title: "Cadbury Ganache Cakes",
    image: cadburyAsset,
    width: 720,
    height: 742,
    alt: "Cadbury ganache bundt cake",
    items: [
      { name: "Large Cadbury ganache bundt cake", price: "R300" },
      { name: "Mini Cadbury ganache cakes", price: "R150 per dozen" },
    ],
  },
  {
    title: "Cupcakes",
    image: blueCupcakes,
    width: 391,
    height: 314,
    alt: "Freshly piped cupcakes",
    items: [
      { name: "Carrot cupcakes with cream cheese", price: "R150 per dozen" },
      { name: "Burfee cupcakes with cream", price: "R150 per dozen" },
      { name: "Vanilla cupcakes", price: "R150 per dozen" },
    ],
  },
  {
    title: "Bento Cake",
    image: bentoCake,
    width: 477,
    height: 593,
    alt: "5 inch bento cake with buttercream rosettes",
    description:
      "5 inch bento cake — perfect for Eid gatherings, family visits and sweet moments of celebration.",
    items: [{ name: "5 inch bento cake", price: "R250" }],
  },
  {
    title: "Classic Desserts",
    image: dessertsAsset,
    width: 720,
    height: 542,
    alt: "Assorted classic dessert cups",
    items: [
      { name: "Peppermint crisp tart", price: "R25 each" },
      { name: "Trifle", price: "R25 each" },
      { name: "Malva pudding", price: "R25 each" },
    ],
  },
  {
    title: "Cheesecakes",
    image: cheesecakesAsset,
    width: 736,
    height: 948,
    alt: "Assorted mini cheesecakes",
    items: [
      { name: "Blueberry cheesecake", price: "R30 each" },
      { name: "Strawberry cheesecake", price: "R30 each" },
      { name: "Pineapple cheesecake", price: "R30 each" },
    ],
  },
];

export const savouryMenu: MenuSection[] = [
  {
    title: "Samoosas",
    image: samoosaAsset,
    width: 660,
    height: 530,
    alt: "Golden crispy samoosas",
    note: "Prices per dozen. Fresh halaal, highest quality ingredients.",
    items: [
      { name: "Potato", price: "R45 per dozen" },
      { name: "Chicken mince", price: "R50 per dozen" },
      { name: "Mutton mince", price: "R55 per dozen" },
      { name: "Cheese & corn", price: "R55 per dozen" },
      { name: "Chicken jalapeno", price: "R65 per dozen" },
    ],
  },
  {
    title: "Pies",
    image: pieAsset,
    width: 712,
    height: 404,
    alt: "Golden homemade savoury pies",
    items: [
      { name: "Sausage roll", price: "R70 per dozen" },
      { name: "Creamy chicken", price: "R75 per dozen" },
      { name: "Pepper steak", price: "R85 per dozen" },
    ],
  },
  {
    title: "Mini Savouries",
    image: savouryMenuAsset,
    width: 646,
    height: 537,
    alt: "Platter of mini savouries and heat-and-eat favourites",
    items: [
      { name: "Mini aloo paratha", price: "R45 per dozen" },
      { name: "Chicken half moons", price: "R50 per dozen" },
      { name: "Mini chicken pizza", price: "R60 per dozen" },
      { name: "Chicken spring rolls", price: "R65 per dozen" },
      { name: "Chicken & mushroom quiche", price: "R70 per dozen" },
      { name: "Mini steak pizza", price: "R70 per dozen" },
      { name: "Chicken buns", price: "R80 per dozen" },
      { name: "Steak buns", price: "R85 per dozen" },
      { name: "Chicken tikka subs", price: "R85 per dozen" },
      { name: "Chicken pittas", price: "R85 per dozen" },
      { name: "Aamili savoury dip 250ml", price: "R45" },
    ],
  },
];