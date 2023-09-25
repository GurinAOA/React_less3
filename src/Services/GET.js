class GET {
  static async getProduct() {
    try {
      const resp = await fetch("http://localhost:3001/allCards");
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async getBasket() {
    try {
      const resp = await fetch("http://localhost:3001/basket");
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
export default GET;

