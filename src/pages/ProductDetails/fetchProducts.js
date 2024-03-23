function fetchProduct() {
  return fetch('http://localhost:4000/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error fetching product data:', error);
    });
}

export default fetchProduct;