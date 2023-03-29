export default function renderQuantityProduct(products) {
    return products?.reduce((initialValue, currenValue) => {
        return initialValue + currenValue.quantity;
    }, 0);
}