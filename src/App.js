import React, { Component } from 'react';

import classes from './App.module.css';
import Header from './Header';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onClickColorOption = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onClickFeatureItem = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }


  render() {
    return (
      <div className="App">
        <Header />
          <div className={classes.mainContainer}>
            <div className={classes.productPrev}>
              <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
              currentSelectedFeature={this.state.currentSelectedFeature}/>
            </div>
  
            <div className={classes.productDetails}>
              <ProductDetails data={this.state.productData} onClickColorOption={this.onClickColorOption} 
              currentPreviewImagePos={this.state.currentPreviewImagePos} onClickFeatureItem={this.onClickFeatureItem}
              currentSelectedFeature={this.state.currentSelectedFeature}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
