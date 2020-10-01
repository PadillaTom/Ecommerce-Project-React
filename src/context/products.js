//::::::::::::: Products Context :::::::::::::::::::::
//
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
// Context:
export const ProductContext = React.createContext();

// Provider, useContext

const ProductProvider = ({ children }) => {
  // Hooks:
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  // useEffect:
  useEffect(() => {
    // Set Loading Gif:
    setLoading(true);
    // Set Products from Axios URL (Strapi : My own API)
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    return () => {
      //Cleanup
    };
  }, []);

  //Main:
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
