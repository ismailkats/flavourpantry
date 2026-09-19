import bentoCake from "@/assets/bento_cake.jpg";
import blueCupcakes from "@/assets/blue_cupcakes.jpg";
import bundt from "@/assets/bundt.jpg";
import chocCups from "@/assets/choc_cups.jpg";
import eclairs from "@/assets/eclairs.jpg";
import fancyCakes from "@/assets/fancy_cakes.jpg";
import lemonTarts from "@/assets/lemon_tarts.jpg";
import peppermintTart from "@/assets/peppermint_tart.jpg";
import pies from "@/assets/pies.jpg";
import samoosas from "@/assets/samoosas.jpg";
import savouries from "@/assets/savouries.jpg";

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
    image: fancyCakes,
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
    image: bundt,
    alt: "Cadbury ganache bundt cake",
    items: [
      { name: "Large Cadbury ganache bundt cake", price: "R300" },
      { name: "Mini Cadbury ganache cakes", price: "R150 p/d" },
    ],
  },
  {
    title: "Cupcakes",
    image: blueCupcakes,
    alt: "Freshly piped cupcakes",
    items: [
      { name: "Carrot cupcakes with cream cheese", price: "R150 p/d" },
      { name: "Burfee cupcakes with cream", price: "R120 p/d" },
      { name: "Vanilla cupcakes", price: "In platters" },
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
    image: peppermintTart,
    alt: "Peppermint crisp tart",
    items: [
      { name: "Peppermint crisp tart", price: "R25" },
      { name: "Trifle", price: "R25" },
      { name: "Malva pudding", price: "R25" },
    ],
  },
  {
    title: "Cheesecakes",
    image: chocCups,
    alt: "Dessert cups",
    items: [
      { name: "Blueberry cheesecake", price: "R30" },
      { name: "Strawberry cheesecake", price: "R30" },
      { name: "Pineapple cheesecake", price: "R30" },
    ],
  },
  {
    title: "Tarts, Eclairs & More",
    image: lemonTarts,
    alt: "Lemon curd tarts",
    items: [
      { name: "Caramel tarts", price: "Platter" },
      { name: "Lemon curd tarts", price: "Platter" },
      { name: "Granadilla & pineapple tarts", price: "Platter" },
      { name: "Milk tarts", price: "Platter" },
    ],
  },
  {
    title: "From the Bakery",
    image: eclairs,
    alt: "Chocolate eclairs",
    items: [
      { name: "Chocolate eclairs", price: "Platter" },
      { name: "Pastry horns", price: "Platter" },
      { name: "Lamingtons", price: "Platter" },
      { name: "Snow balls", price: "Platter" },
    ],
  },
];

export const savouryMenu: MenuSection[] = [
  {
    title: "Samoosas",
    image: samoosas,
    alt: "Golden crispy samoosas",
    note: "Prices per dozen. Fresh halaal, highest quality ingredients.",
    items: [
      { name: "Chicken mince", price: "R50 p/d" },
      { name: "Mutton mince", price: "R55 p/d" },
      { name: "Chicken jalapeno", price: "R65 p/d" },
      { name: "Cheese & corn", price: "R55 p/d" },
      { name: "Potato", price: "R45 p/d" },
    ],
  },
  {
    title: "Pies",
    image: pies,
    alt: "Golden homemade savoury pies",
    items: [
      { name: "Creamy chicken", price: "R75" },
      { name: "Pepper steak", price: "R85" },
      { name: "Sausage roll", price: "R65" },
    ],
  },
  {
    title: "Mini Savouries",
    image: savouries,
    alt: "Platter of mini savouries",
    items: [
      { name: "Chicken half moons", price: "R50" },
      { name: "Polony puri", price: "R50" },
      { name: "Chicken spring rolls", price: "R65" },
      { name: "5 in 1 chicken cutlets", price: "R70" },
      { name: "Aamili savoury dip 250ml", price: "R45" },
    ],
  },
  {
    title: "Heat & Eat",
    image: savouries,
    alt: "Heat and eat savoury selection",
    items: [
      { name: "Mini chicken pizza", price: "R60" },
      { name: "Mini steak pizza", price: "R70" },
      { name: "Chicken buns", price: "R80" },
      { name: "Steak buns", price: "R85" },
      { name: "Chicken croissants", price: "R85" },
      { name: "Chicken tikka subs", price: "R85" },
      { name: "Mini aloo paratha", price: "R45" },
      { name: "Chicken tramezzini", price: "R85" },
      { name: "Chicken bagels", price: "R85" },
      { name: "Chicken pittas", price: "R85" },
      { name: "Chicken & mushroom quiche", price: "R70" },
    ],
  },
];