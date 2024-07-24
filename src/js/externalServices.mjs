const baseURL = import.meta.env.MONGODB_URL
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getTemplesByName(temp_name) {
  const response = await fetch(baseURL + `/search/${temp_name}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findTempleById(temp_id) {
  const response = await fetch(baseURL + `/${temp_id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function loginRequest(user) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(baseURL + "/login/", options).then(convertToJson);
  return response.accessToken;
}

//getorders
export async function getOrders(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "/orders/", options).then(convertToJson);
  return response;
}
