import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../api/api";
import { addToCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
const Products = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // navigate('/cart');
  };
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className=" relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute " />
                        {product.name}
                      </a>
                    </h3>
                    
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price }
                  </p>
                </div>
                <div className="text-center ">
                  <button onClick={()=>handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
