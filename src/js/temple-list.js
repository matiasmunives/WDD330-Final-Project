import { getParam, loadHeaderFooter } from "./utils.mjs";
import templesList from "./templeList.mjs";

loadHeaderFooter();
const tempName = getParam("tempName");
templesList(".temples-list", tempName);
