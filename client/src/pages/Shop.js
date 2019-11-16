import React from "react";
import {connect} from 'react-redux';

import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Shop extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab="Shop"/>
                <div class="row justify-content-around" style={{padding: 100}}>
                    {this.props.shopItems.map((item, index) => {
                        return(
                            <div class="col-sm-4" style={{marginBottom: 75}}>
                                <div class="card" style={{width: "20rem", height: "36rem"}}>
                                    <img class="card-img-top" src={item.image} alt={"image " + index}/>
                                    <div class="card-body d-flex flex-column">
                                        <div class="row justify-content-between" style={{marginLeft: 1, marginRight: 1}}>
                                            <h5 class="card-title">{item.name}</h5>
                                            <i>${item.price}</i>
                                        </div>
                                        <p class="card-text">{item.description}</p>
                                        <button class="btn btn-primary mt-auto" onClick={() => this.props.addToCart(index)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Shop;

const fakeDB = [
    {
        image: ".../100px180/",
        name: "Grip 0",
        price: "0",
        description: "Grip 0: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        image: ".../100px180/",
        name: "Grip 1",
        price: "10",
        description: "Grip 1: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        image: ".../100px180/",
        name: "Grip 2",
        price: "20",
        description: "Grip 2: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        image: ".../100px180/",
        name: "Grip 3",
        price: "30",
        description: "Grip 3: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        image: ".../100px180/",
        name: "Grip 4",
        price: "40",
        description: "Grip 4: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        image: ".../100px180/",
        name: "Grip 5",
        price: "50",
        description: "Grip 5: Some quick example text to build on the card title and make up the bulk of the card's content",
    },
]
function mapStateToProps(state){
    return{
      shopItems: state.shopItems,
      cartItems: state.cartItems,
      totalCost: state.totalCost
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        addToCart: (shopItemIndex) => dispatch({type: 'ADD_TO_CART', shopItemIndex}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop)
