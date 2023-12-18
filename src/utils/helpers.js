export const formatPrice = (price) => {
  return new Intl.NumberFormat("tr", {
    style: "currency",
    currency: "TRY",
  }).format(price / 100);
};
