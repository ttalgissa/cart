import React, { useEffect, useContext} from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import { VscErrorCompact } from 'react-icons/vsc';

function Products() {

  const{ products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container" >
        {products?.length === 0 ? (
          <div className="error-container">
            <VscErrorCompact className="error-icon" />
            <h2 className="error-message">
              Nenhum produto encontrado.
            </h2>
          </div>
        ) : (
          products?.map((product) => <ProductCard key={product.id} data={product} />)
        )}
      </section>
    )
  );
}

export default Products;
