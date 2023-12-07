import { Link } from '@mui/material';
import React from 'react';

const ProductRow = ({ product }) => {
    return (
       
            <Link to={`/manga/${product.id}`}>
                <button>
      <tr className="bg-white border-b">
        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{product.productName}</td>
        
        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{product.price} tk</td>
      </tr>
      </button>
      </Link>
      

    );
  };
export default ProductRow;
