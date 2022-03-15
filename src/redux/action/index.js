// For Add Item To Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
// For Delete Item To Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
export const delCrt = (product) => {
  return{
      type : "HAPUS",
      payload : product
  }
}