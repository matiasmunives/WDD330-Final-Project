
import { getTemplesByName } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

  function createTempleCard(temple) {
    return `<li class="temple-card">
      <a href="../temples/index.html?temples=${temple.temp_id}">
      <img
        src="${temple.temp_picture}"
        alt="Image of ${temple.temp_name}"
      />
      <h3 class="card__temple">${temple.temp_name}</h3>
      <p class="card__description">$${temple.temp_address}</p>
      <p class="card__description">$${temple.temp_city}</p>
      <p class="card__description">$${temple.temp_country}</p>
      <p class="card__description">$${temple.temp_phone}</p>
      <p class="card__description">$${temple.temp_bdate}</p>
      <p class="card__description">$${temple.temp_ddate}</p>    
      </a>
    </li>`;
  }
  
export default async function templesList(selector, temp_name) {
  // get the temple we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const temples = await getTemplesByName(temp_name);
  // render out the temple list 

  renderListWithTemplate(createTempleCard, el, temples);

  document.querySelector(".title").innerHTML = category.toUpperCase();
}
  