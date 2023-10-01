class POST {
  static async postBurgerFromBasket(object) {
    try {
      const resp =await fetch("http://localhost:3001/basket", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(object),
      });
    } catch (e) {
      console.error(e);
    }
  }
}
export default POST;
