const productDetails = ({ params }) => {
  const { id } = params;
  console.log(id);
  fetch(`http://localhost:5000/products/${id}`)
    .then((res) => console.log(res))
    .then((err) => console.log(err));

  return (
    <div>
      <h2>Product details</h2>
    </div>
  );
};

export default productDetails;
