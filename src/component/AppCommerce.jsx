import React from "react";
import Cart from "./ecommerce/Cart";
import Item from "./ecommerce/Item";
import Merchant from "./ecommerce/Merchant";

class AppCommerce extends React.Component{
    render(){
        return (
            <main>
                <div> Ecommerce React </div>
                <Cart items={"macbook air"}/>
                
                {/* <Item items={"macbook air, macbook M1, Lenovo"}/>
                <Merchant names={"warungbahagia"}/> */}
            </main>
        )
    }    
}

export default AppCommerce;