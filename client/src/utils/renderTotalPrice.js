export default function renderTotalPrice(products) {
  return products?.reduce((initialValue, currenValue) => {
    return initialValue + currenValue.quantity * currenValue.productId.price;
  }, 0);
}
