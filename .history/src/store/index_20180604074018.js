const Store = {
  data: {
    nbDisplay: 10,
    search: "",
    products: [],
    realtime: false,
    orderBy: "title"
  },
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    this.data[key] = value;
  }
};

export default Store;
