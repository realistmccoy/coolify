import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeaturedProduct from '../shared/featuredProduct'



const FeatureCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    // <Page>
    //   <Grid>
    //     {productItems.map((p, i) =>(
    //       <Card 
    //       key={p.description}
    //       hexa={p.hexa}
    //       title={p.title}
    //       description={p.description}
    //       image={p.imageUrl}
    //       />
    //     ))}
    //   </Grid>
    // </Page>

    <div className='featured-collection container'>
      <h2 className='featured-section-title'>Featured Collection</h2>
      <div >
        {
          productItems
        }
      </div>
    </div>
  )
}

export default FeatureCollection