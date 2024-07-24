import { getParam, loadHeaderFooter } from "./utils.mjs";
import propertiesList from "./templeList.mjs";

loadHeaderFooter();

const propName = getParam("propName");
propertiesList(".temples-list", propName);