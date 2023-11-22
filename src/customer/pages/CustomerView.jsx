/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }SingleProductView
  ```
*/
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState,useEffect,useParams,useNavigate } from "react";
import axios from "axios"
import MainCar2 from "../components/homeCarosel/MainCar2"
import { Link } from "react-router-dom";


  
  export default function CustomerView() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      loadProducts();
    }, []);
    useEffect(() => {}, []);
  
    const loadProducts = async () => {
      const result = await axios.get("http://localhost:8080/products/getAll");
      setProducts(result.data);
    };






    return (
        
      <div className="bg-white">
        <MainCar2/>
        <img
            className="w-full h-80   flex bg-cover bg-center container" // Apply the w-full class for full-width images using Tailwind CSS
            role="presentation"
            src="https://wallpaper.dog/large/10974217.jpg"
            alt=""
          />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Mangas</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/manga/${product.id}`}>
            <Button key={product.id} className="group relative bg-white">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.productName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price} TK</p>

              
              </div>
              {product.premier && (
                <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 rounded-full flex justify-center items-center">
                  <span className="text-white font-bold">PRO</span>
                </div>
              )}

            </Button>
            </Link>
          ))}
          </div>
        </div>
      </div>
    )
  }
  