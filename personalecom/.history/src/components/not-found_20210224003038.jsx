import React from 'react';
import Layout from './shared/layout'

const NotFound = () => {
  const styles = {
    fontWeight: 'bold',
    textAlign: 'center'
  }
  return (
    <Layout>
      <p style={styles}> unfortunately, we cant find that page</p>
    </Layout>
  )
}

export default NotFound