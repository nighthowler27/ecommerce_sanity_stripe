import React, { useState } from 'react';

import { client } from '../lib/client';
import { Product, Best_Seller, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bestSellers, bannerData }) => {
    const [currentPageProducts, setCurrentPageProducts] = useState(1);
    const [currentPageBestSellers, setCurrentPageBestSellers] = useState(1);

  const handleChangePageProducts = (pageNumber) => {
    setCurrentPageProducts(pageNumber);
    event.preventDefault();
  };

  const handleChangePageBestSellers = (pageNumber) => {
    setCurrentPageBestSellers(pageNumber);
    event.preventDefault();
  };

  const pageLinks = Array(Math.ceil(products.length / 10))
  .fill(null)
  .map((_, index) => (
    <button key={index} className="pg_number">
      <a href="" onClick={() => handleChangePageProducts(index + 1)}>
        {index + 1}
      </a>
    </button>
  ));

  const pageLinks1 = Array(Math.ceil(bestSellers.length / 5))
  .fill(null)
  .map((_, index) => (
    <button key={index} className="pg_number">
      <a href="" onClick={() => handleChangePageBestSellers(index + 1)}>
        {index + 1}
      </a>
    </button>
  ));
  return (
    <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        {console.log(bannerData)}
        
        <div className="products-heading">
            <h2>New Arrivals</h2>
            <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
            {products?.slice((currentPageProducts - 1) * 10, currentPageProducts * 10)
                .map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    
        <div className="pages">
            <ul className="homepg-pagination">
                <li className="page-prev">
                {currentPageProducts === 1 ? (
                    <a href="" className="page-link disabled" disabled>
                    Previous
                    </a>
                ) : (
                    <a href="" className="page-link" onClick={() => handleChangePageProducts(currentPageProducts - 1)}>
                    Previous
                    </a>
                )}
                </li>
                <li className="pg_numbers">{pageLinks}</li>
                <li className="page-next">
                {currentPageProducts === Math.ceil(products.length / 10) ? (
                    <a href="" className="page-link disabled" disabled>
                    Next
                    </a>
                ) : (
                    <a href="" className="page-link" onClick={() => handleChangePageProducts(currentPageProducts + 1)}>
                    Next
                    </a>
                )}
                </li>
            </ul>
        </div>
                
        <div className="products-heading">
            <h2>Hot and Best Selling Toys</h2>
            <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
            {bestSellers?.slice((currentPageBestSellers - 1) * 5, currentPageBestSellers * 5)
                .map((product) => (
                <Best_Seller key={product._id} product={product} />
            ))}
        </div>
    
        <div className="pages">
            <ul className="homepg-pagination">
                <li className="page-prev">
                {currentPageBestSellers === 1 ? (
                    <a href="" className="page-link disabled" disabled>
                    Previous
                    </a>
                ) : (
                    <a href="" className="page-link" onClick={() => handleChangePageBestSellers(currentPageBestSellers - 1)}>
                    Previous
                    </a>
                )}
                </li>
                <li className="pg_numbers">{pageLinks1}</li>
                <li className="page-next">
                {currentPageBestSellers === Math.ceil(bestSellers.length / 5) ? (
                    <a href="" className="page-link disabled" disabled>
                    Next
                    </a>
                ) : (
                    <a href="" className="page-link" onClick={() => handleChangePageBestSellers(currentPageBestSellers + 1)}>
                    Next
                    </a>
                )}
                </li>
            </ul>
        </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bestSellerQuery = '*[_type == "bestSeller"]';
  const bestSellers = await client.fetch(bestSellerQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, bestSellers }
  }
}

export default Home;
