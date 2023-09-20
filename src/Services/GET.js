class GET {
  static async getPost() {
    try {
      const resp = await fetch("http://localhost:3000/burgers");
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  
}
export default GET;

