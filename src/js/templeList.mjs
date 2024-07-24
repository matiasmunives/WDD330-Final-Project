
import { getTemplesByName } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

  function createTempleCard(temple) {
    return `<li class="temple-card">
      <a href="../properties/index.html?temple=${temple._id}">
      <img
        src="${temple.tempPicture}"
        alt="Image of ${temple.tempName}"
      />
      <h3 class="card__temple">${temple.tempName}</h3>
      <p class="card__description">$${temple.tempAddress}</p>
      <p class="card__description">$${temple.tempCity}</p>
      <p class="card__description">$${temple.tempCountry}</p>
      <p class="card__description">$${temple.tempPhone}</p>
      <p class="card__description">$${temple.tempBdate}</p>
      <p class="card__description">$${temple.tempDdate}</p>    
      </a>
    </li>`;
  }
  
export default async function templesList(selector, tempName) {
  // get the temple we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const temples = await getTemplesByName(tempName);
  // render out the temple list 

  renderListWithTemplate(createTempleCard, el, temples);

  document.querySelector(".title").innerHTML = category.toUpperCase();
}
  