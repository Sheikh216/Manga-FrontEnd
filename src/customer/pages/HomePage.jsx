import React, { useEffect, useState } from "react";
import MainCar2 from "../components/homeCarosel/MainCar2";
import axios from "axios";
import FooterFiveColsLogo from "../components/footer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);
  useEffect(() => {}, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/products/getAll");
    setProducts(result.data);
  };

  const { id } = useParams();
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/products/delete/${id}`);
    loadProducts();
  };

  return (
    <div className=" min-height ">
      

      <>
        {/* <div> <MainCar2/></div> */}
        {/*<!-- Component: Borderless Table --> */}
        <div className="  w-full overflow-x-auto my-10 border shadow px-9 z-10 mb-48 container bg-white">
        
          <img
            className="w-full h-80   flex bg-cover bg-center" // Apply the w-full class for full-width images using Tailwind CSS
            role="presentation"
            src={"https://wallpaper.dog/large/20614321.jpg"}
            alt=""
          />
         
          <table
            className="w-full text-left rounded w-overflow-x-auto"
            cellspacing="0"
          >
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  ID
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  PRICE
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  QUANTITY
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Edit/Delete
                </th>
              </tr>

              {products.map((product, index) => (
                <tr>
                  <td scope="row" key={index} className="px-4">
                    {index + 1}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {product.productName}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {product.brand}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {product.description}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {product.price} Taka
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {product.quantity}
                  </td>

                  <td>
                    <img
                      src={product.image}
                      className=" h-20 p-2  rounded-full h-24 w-24 flex items-center justify-center "
                    />
                  </td>
                  <td className="px-2">
                    <Link
                      to={`/manga/${product.id}`}
                      class="inline-flex items-center self-center justify-center h-6 w-6 gap-1 px-2 ml-3 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                      <span class="relative only: px-3">
                        <VisibilityIcon className="h-1 px-0.5" />
                      </span>
                    </Link>


                    <Link
                      to={`/editProduct/${product.id}`}
                      class="inline-flex items-center self-center justify-center h-6 w-6 gap-1 px-2 ml-1 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-green-400 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                      <span class="relative only: px-3">
                        <EditIcon className="h-1 px-0.5" />
                      </span>
                    </Link>

                    <Button
                      onClick={() => deleteProduct(product.id)}
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
        {/*<!-- End Borderless Table --> */}
      </>
    </div>
  );
};

export default HomePage;
