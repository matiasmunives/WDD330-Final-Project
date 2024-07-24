import { getParam, loadHeaderFooter } from "./utils.mjs";
import templesList from "./templeList.mjs";

loadHeaderFooter();
const temp_name = getParam("temp_name");
templesList(".temples-list", temp_name);
