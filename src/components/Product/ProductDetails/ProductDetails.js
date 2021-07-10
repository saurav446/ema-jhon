import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../../fakeData';
import Product from '../Product';

const ProductDetails = () => {
    const {Pkey} = useParams();
    const product = fakeData.find(products => products.key  === Pkey); 
    return (
        <div>
         <Product addToCart={false}   linkOff={true} linkOffs={false} product={product}></Product>            
        </div>
    );
};

export default ProductDetails;



