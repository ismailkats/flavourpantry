import bentoCake from "@/assets/bento_cake.jpg";
import blueCupcakes from "@/assets/blue_cupcakes.jpg";
import cadburyAsset from "@/assets/cadbury.jpg.asset.json";
import cheesecakesAsset from "@/assets/cheesecakes.jpg.asset.json";
import dessertsAsset from "@/assets/desserts.jpg.asset.json";
import fancyCakesAsset from "@/assets/fancy-cakes-platter.jpg.asset.json";
import pieAsset from "@/assets/pie-menu.jpg.asset.json";
import samoosaAsset from "@/assets/samoosa-menu.jpg.asset.json";
import savouryMenuAsset from "@/assets/savoury-menu.jpg.asset.json";

export type MenuItem = { name: string; price: string };

export type MenuSection = {
  title: string;
  image: string;
  alt: string;
  description?: string;
  note?: string;
  items: MenuItem[];
};

export const sweetMenu: MenuSection[] = [
  {
    title: "Fancy Cakes Platter",
    image: fancyCakesAsset.url,
    alt: "Assorted fancy cakes platter",
    description:
      "A beautiful mixed platter — pastry horns, caramel tarts, chocolate eclairs, lemon curd tarts, granadilla & pineapple tarts, lamingtons, milk tarts, vanilla cupcakes and snow balls.",
    items: [
      { name: "Platter of 100", price: "R560" },
      { name: "Platter of 50", price: "R280" },
    ],
  },
  {
    title: "Cadbury Ganache Cakes",
    image: cadburyAsset.url,
    alt: "Cadbury ganache bundt cake",
    items: [
      { name: "Large Cadbury ganache bundt cake", price: "R300" },
      { name: "Mini Cadbury ganache cakes", price: "R150 per dozen" },
    ],
  },
  {
    title: "Cupcakes",
    image: blueCupcakes,
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
    alt: "5 inch bento cake with buttercream rosettes",
    description:
      "5 inch bento cake — perfect for Eid gatherings, family visits and sweet moments of celebration.",
    items: [{ name: "5 inch bento cake", price: "R250" }],
  },
  {
    title: "Classic Desserts",
    image: dessertsAsset.url,
    alt: "Assorted classic dessert cups",
    items: [
      { name: "Peppermint crisp tart", price: "R25" },
      { name: "Trifle", price: "R25" },
      { name: "Malva pudding", price: "R25" },
    ],
  },
  {
    title: "Cheesecakes",
    image: cheesecakesAsset.url,
    alt: "Assorted mini cheesecakes",
    items: [
      { name: "Blueberry cheesecake", price: "R30" },
      { name: "Strawberry cheesecake", price: "R30" },
      { name: "Pineapple cheesecake", price: "R30" },
    ],
  },
];

export const savouryMenu: MenuSection[] = [
  {
    title: "Samoosas",
    image: samoosaAsset.url,
    alt: "Golden crispy samoosas",
    note: "Prices per dozen. Fresh halaal, highest quality ingredients.",
    items: [
      { name: "Chicken mince", price: "R50 per dozen" },
      { name: "Mutton mince", price: "R55 per dozen" },
      { name: "Chicken jalapeno", price: "R65 per dozen" },
      { name: "Cheese & corn", price: "R55 per dozen" },
      { name: "Potato", price: "R45 per dozen" },
    ],
  },
  {
    title: "Pies",
    image: pieAsset.url,
    alt: "Golden homemade savoury pies",
    items: [
      { name: "Creamy chicken", price: "R75" },
      { name: "Pepper steak", price: "R85" },
      { name: "Sausage roll", price: "R65" },
    ],
  },
  {
    title: "Mini Savouries",
    image: savouryMenuAsset.url,
    alt: "Platter of mini savouries and heat-and-eat favourites",
    items: [
      { name: "Chicken half moons", price: "R50" },
      { name: "Chicken spring rolls", price: "R65" },
      { name: "Aamili savoury dip 250ml", price: "R45" },
      { name: "Mini chicken pizza", price: "R60" },
      { name: "Mini steak pizza", price: "R70" },
      { name: "Chicken buns", price: "R80" },
      { name: "Steak buns", price: "R85" },
      { name: "Chicken tikka subs", price: "R85" },
      { name: "Mini aloo paratha", price: "R45" },
      { name: "Chicken pittas", price: "R85" },
      { name: "Chicken & mushroom quiche", price: "R70" },
    ],
  },
];