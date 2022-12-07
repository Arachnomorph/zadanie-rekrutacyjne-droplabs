const sorter = (allProducts, order) => {
    const sortedProducts = allProducts.sort((a, b) => a.title.localeCompare(b.title));
     if (order === 'descending') {
        return sortedProducts.reverse();
     }
    console.log(allProducts);
    return sortedProducts;
}

export default sorter;