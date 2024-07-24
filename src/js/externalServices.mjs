const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getTemplesByName(tempName) {
  const response = await fetch(baseURL + `/temple/${tempName}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findTempleById(_id) {
  const response = await fetch(baseURL + `/temple/${_id}`);
  const temple = await convertToJson(response);
  return temple.Result;
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

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "/checkout/", options).then(convertToJson);
}