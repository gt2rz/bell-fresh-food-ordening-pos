import HamburgerIcon from "@/icons/categories/Hamburger.astro";
import PizzaIcon from "@/icons/categories/Pizza.astro";
import DrinksIcon from "@/icons/categories/Drinks.astro";
import SaladIcon from "@/icons/categories/Salad.astro";
import SorbetsIcon from "@/icons/categories/Sorbets.astro";
import TacosIcon from "@/icons/categories/Tacos.astro";
import DonutIcon from "@/icons/categories/Donut.astro";

export const categories = [
    { id: 1, label: "Hamburger", icon: HamburgerIcon, width: 90, height: 90, url:"/images/hamburger.png" },
    { id: 2, label: "Pizza", icon: PizzaIcon, width: 90, height: 90, url:"/images/pizza.png" },
    { id: 3, label: "Drinks", icon: DrinksIcon, width: 30, height: 72, url:"/images/drinks.png" },
    { id: 4, label: "Salad", icon: SaladIcon, width: 90, height: 72, url:"/images/salad.png" },
    { id: 5, label: "Donuts", icon: DonutIcon, width: 120, height: 72, url:"/images/donuts.png" },
];