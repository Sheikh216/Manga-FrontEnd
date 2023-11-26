import { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const CID = localStorage.getItem('CID');
    const allCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const specificUserCartItems = allCartItems[CID] || [];
    setCartItems(specificUserCartItems);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <div className="mt-10">
          <ul className="-my-8 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-8 flex">
                <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-lg" />
                <div className="ml-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Name : {item.name}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Description: {item.description}</p>
                    <p className="mt-1 text-sm text-gray-900">Price: {item.price}</p>
                    <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                    {/* Add other item details you want to display */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
