const renderSavedProduct = (user, productId) => {
  return user?.bookmarks?.some((bookmark) => bookmark === productId);
};

export default renderSavedProduct;
