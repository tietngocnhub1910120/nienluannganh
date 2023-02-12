import FormCheckout from "../components/CheckoutForm";
const Checkout = () => {
  return (
    <div className="app__container">
      <section className="grid grid-cols-5 gap-2">
        <div className="col-span-3">
          <FormCheckout />
        </div>
        <div className="col-span-2">recode</div>
      </section>
    </div>
  );
};

export default Checkout;
