import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios


//Here item.quantity is the total quantity in the database for that specific product
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [qty,setqty] = useState(1)

  
  // console.log("cartItems",cartItems)


  const navigate = useNavigate();
  const login_info = localStorage.getItem("LOGIN");



  const CID = localStorage.getItem('CID');


  const checkLogin = () => {
   if (login_info !== "true") {
     
     navigate('/loginUser');
   }
 };

 function handleQuantityChange(index,plus_or_minus){
  //copying the same array or state. 
  const updatedCartItems = [...cartItems];
  //accesing specific
  const item = updatedCartItems[index];
  console.log(item)

  
  console.log('BEFORE      total',item.quantity,'qty',item.qty)
  if (plus_or_minus===true){
   if (item.quantity>item.qty) {
    item.qty +=1 
    

   }
   
   
  } else if ( item.qty>=1){
   item.qty -=1
  }

  updatedCartItems[index] = item;
  setCartItems(updatedCartItems);

  

  // console.log('qty')


 }

 const calculateTotal = (item) => {
  return item.price * item.qty;
};

const calculateTotalCost = () => {
 let totalCost = 0;
 cartItems.forEach((item) => {
   totalCost += calculateTotal(item);
 });
 return totalCost;
};


const Pay = () => {
 console.log('PAID');


 //Api calls
 cartItems.forEach(item => {
  axios.put(`http://localhost:8080/products/${item.id}/decrement?quantity=${item.qty}`)
    .then(response => {
      // Handle the response
      console.log('API call successful for item ID:', item.id);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
});





 
 const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
 delete existingCartItems[CID]; // Remove the user's cart items
 localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
 navigate("/customerView")

 
  // Uncomment this line if you have a success page
};



function handleDeleteItem(index) {
 const updatedCartItems = [...cartItems];
 updatedCartItems.splice(index, 1); // Remove the item at the specified index

 console.log(updatedCartItems)

 setCartItems(updatedCartItems); // Update the state with the modified cart items

 // Update the cart items in localStorage
 const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
 existingCartItems[CID] = updatedCartItems;
 localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
}


  useEffect(() => {
    checkLogin()
    // const CID = localStorage.getItem('CID');
    const allCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const specificUserCartItems = allCartItems[CID] || [];
    setCartItems(specificUserCartItems);
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
      <div>
        <h2>Total Cost: {calculateTotalCost()}</h2>
        <button 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
         onClick={Pay} // Remove parentheses here
        >
          Pay
        </button>

      </div>
        {cartItems.map((item,index) => (
          <div
            key={item.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200"
          >
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-lg font-medium text-gray-900"><b>Name </b> {item.name}</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500"><b>Description:</b> {item.description}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Price</dt>
                  <dd className="mt-1 text-sm text-gray-900">{item.price}</dd>
                </div>


{/* 
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                  <dd className="mt-1 text-sm text-gray-900">{item.quantity}</dd>
                </div> */}
                <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                <div className="flex items-center mt-1">
                <button
                  onClick={() => handleQuantityChange(index, false)}
                  className="text-gray-500 rounded-md p-1 focus:outline-none"
                >
                  -
                </button>
                <span className="mx-2">{item.qty}</span>
                <button
                  onClick={() => handleQuantityChange(index, true)}
                  className="text-gray-500 rounded-md p-1 focus:outline-none"
                >
                  +
                </button>
                </div>
                </div>
                
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Image</dt>
                  <img src={item.image} alt={item.name} className="mt-1 sm:h-24 sm:w-24 object-cover" />
                </div>

                <div className="sm:col-span-1">
                   <button onClick={() => handleDeleteItem(index)} className="text-red-500 rounded-md p-1 focus:outline-none">
                    Delete
                  </button>
                </div>


                {/* Add other item details you want to display */}
              </dl>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default CartPage;
