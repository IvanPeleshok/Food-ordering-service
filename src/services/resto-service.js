export default class RestoService {
  _apiBase = "http://localhost:3000/";

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url} received ${response.status}`
      );
    }
    const result = await response.json();
    return result;
  };
  getMenuItem = async () => {
    const data = await this.getResource("menu");
    return data;
  };

  setOrder = async (order) => {
    const numberOfOrder = await this.getNumberOrder();
    const newOrder = {
      id: numberOfOrder,
      order,
    };

    const response = await fetch(`${this._apiBase}order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder), // body data type must match "Content-Type" header
    });
      if (!response.ok) {
        throw new Error("json error");
      }
  };

  getNumberOrder = async () => {
    const order = await this.getResource("order");
    const number = order.length + 1;
    return number;
  };
}
