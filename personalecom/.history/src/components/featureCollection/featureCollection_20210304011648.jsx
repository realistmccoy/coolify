import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeatureProduct from '../shared/featuredProduct'




const FeatureCollection = () => {
  const {products} = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map((product, i) => (
    <Page>
      <Grid>
      {/* <FeatureProduct {...product} key={product.id} /> */}
      <Card
          key={product.description}
          hexa={product.hexa}
          title={product.title}
          description={product.description}
          image={product.imageUrl}
        />
      </Grid>
      
    </Page>
     
  ))

  return(
  //   <Page>
     
  //   <Grid>
  //     {productItems.map((product, index) => (
  //       <Card
  //         key={product.description}
  //         hexa={product.hexa}
  //         title={product.title}
  //         description={product.description}
  //         image={product.imageUrl}
  //       />
  //     ))}
  //   </Grid>
  // </Page>
  <div className='featured-collection container'>
  <h2 className='featured-section-title'>Featured Collection</h2>
  <div className='products'>
    {
      productItems
    }
  </div>
</div>
  )
}

export default FeatureCollection