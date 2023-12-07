import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

//Here item.quantity is the total quantity in the database for that specific product
const WishList = () => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    brand: "",
    price: 0,
    quantity: 0,
    description: "",
    image: "",
  });
 
  const addWishlist = () => {
    

    const selectedProduct = {
      id: newProduct.id,
      name: newProduct.productName,
      price: newProduct.price,
      quantity: newProduct.quantity,
      qty: 1,
      image: newProduct.image,
      description: newProduct.description,
 
    };

  
    const CID = localStorage.getItem("CID");

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || {};

    const cartItemsForCustomer = existingCartItems[CID] || [];

    cartItemsForCustomer.push(selectedProduct);

    existingCartItems[CID] = cartItemsForCustomer;

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

   
  };

  const [cartItems, setCartItems] = useState([]);
  const [qty, setqty] = useState(1);



  const navigate = useNavigate();
  const login_info = localStorage.getItem("LOGIN");

  const CID = localStorage.getItem("CID");

  const checkLogin = () => {
    if (login_info !== "true") {
      navigate("/loginUser");
    }
  };

  function handleQuantityChange(index, plus_or_minus) {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    console.log(item);

    console.log("BEFORE      total", item.quantity, "qty", item.qty);
    if (plus_or_minus === true) {
      if (item.quantity > item.qty) {
        item.qty += 1;
      }
    } else if (item.qty >= 1) {
      item.qty -= 1;
    }

    updatedCartItems[index] = item;
    setCartItems(updatedCartItems);
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
    console.log("PAID");

    //Api calls
    cartItems.forEach((item) => {
      axios
        .put(
          `http://localhost:8080/products/${item.id}/decrement?quantity=${item.qty}`
        )
        .then((response) => {
          // Handle the response
          console.log("API call successful for item ID:", item.id);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    });

    const existingCartItems =
      JSON.parse(localStorage.getItem("wishListItems")) || {};
    delete existingCartItems[CID]; // Remove the user's cart items
    localStorage.setItem("wishListItems", JSON.stringify(existingCartItems));
    navigate("/customerView");

    // Uncomment this line if you have a success page
  };

  function handleDeleteItem(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove the item at the specified index

    console.log(updatedCartItems);

    setCartItems(updatedCartItems); // Update the state with the modified cart items

    // Update the cart items in localStorage
    const existingCartItems =
      JSON.parse(localStorage.getItem("wishListItems")) || {};
    existingCartItems[CID] = updatedCartItems;
    localStorage.setItem("wishListItems", JSON.stringify(existingCartItems));
  }

  useEffect(() => {
    checkLogin();
    // const CID = localStorage.getItem('CID');
    const allCartItems =
      JSON.parse(localStorage.getItem("wishListItems")) || {};
    const specificUserCartItems = allCartItems[CID] || [];
    setCartItems(specificUserCartItems);
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 container">
      <h1 className="text-3xl font-bold mb-8">Your Favorite Items</h1>
      <p>There are {cartItems.length} products in this list</p>

      {/* Products List */}
      <div className="mt-6">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Unit Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Stock Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 line-through">
                            {item.originalPrice}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.quantity
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.quantity ? "In Stock" : "Out of Stock"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                         
                          <form className="mt-5">
                            {/* Sizes */}

                            <Button
                              type="submit"
                              className="text-white  bg-black rounded"
                              onClick={addWishlist} 
                            //   key={product.id}
                            >
                               Add to cart
                            </Button>
                          </form>
                        </td>
                        <td className="px-2">
                          <Button
                            onClick={() => handleDeleteItem(index)}
                            class="inline-flex items-center self-center justify-center h-6 w-6 gap-1 px-2 ml-1 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-red-600 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                          >
                            <span class="relative only: px-3">
                              <DeleteIcon className="h-1 px-0.5" />
                            </span>
                          </Button>

                          {/* <button className="btn btn-primary mx-2"></button>
                    <button className="btn btn-outline-danger mx-2">asd</button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products List End */}
    </div>
  );
};

export default WishList;
