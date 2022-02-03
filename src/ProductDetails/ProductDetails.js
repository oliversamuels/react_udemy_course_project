import React from 'react';

import classes from './ProductDetails.module.css';


const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productImage];
        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.selectedItem);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onClickColorOption(pos)}/>
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [];

        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.selectedFeature)
        }
        return(
            <button onClick={() => props.onClickFeatureItem(pos)} key={pos} id={classArr.join(' ')}>{item}</button>
        );
    })
    return(
        <div className={classes.productDetails}>
            <h1 className={classes.productTitle}>{props.data.title}</h1>
            <p className={classes.productDescription}>{props.data.description}</p>

            <h3 className={classes.sectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>

            <h3 className={classes.sectionHeading}>Features</h3>
            <div className={classes.section}>
              {featureList}
            </div>
            <button className={classes.primaryButton}>Buy Now!</button>
        </div>
    );
}

export default ProductDetails;