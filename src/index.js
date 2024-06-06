import create from "./utils/ButtonCreate.js";
import home from "./utils/home.js";

var parentNode = document.getElementById("navbar");
parentNode.append(create("HomeButton", "Home"));

parentNode.append(create("MenuButton", "Menu"));

parentNode.append(create("AboutButton", "About Us"));

parentNode.append(create("ContactButton", "Contact Us"));

parentNode = document.getElementById("content");

parentNode.append(home("title", "Bellacio Fine Dining"));
parentNode.append(home("subtitle", "fine dining redefined"));
