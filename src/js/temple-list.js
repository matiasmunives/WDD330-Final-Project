import { getParam, loadHeaderFooter } from "./utils.mjs";
import templesList from "./templeList.mjs";

loadHeaderFooter();

const tempName = getParam("category");
templesList(".temples-list", tempName);
