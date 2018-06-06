const Store = {
  data: {
    nbDisplay: 10,
    search: "",
    products: [],
    realtime: false,
    displayBlocks: 3,
    orderBy: "title"
  },
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    console.log(value, this);
    this.data[key] = value;
  }
};

export default Store;
