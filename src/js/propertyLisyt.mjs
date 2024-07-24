
import { getPropertiesByName } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

  function createPropertyCard(property) {
    return `<li class="temple-card">
      <a href="../properties/index.html?property=${property._id}">
      <h3 class="card__temple">${property.tempName}</h3>
      <p class="card__description">$${property.propName}</p>
      <p class="card__description">$${property.propSize}</p>
      <p class="card__description">$${property.Comments}</p> 
      </a>
    </li>`;
  }
  
export default async function propertiesList(selector, propName) {
  // get the property we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of properties
  const temples = await getPropertiesByName(propName);
  // render out the property list 

  renderListWithTemplate(createPropertyCard, el, properties);

  document.querySelector(".title").innerHTML = category.toUpperCase();
}
  