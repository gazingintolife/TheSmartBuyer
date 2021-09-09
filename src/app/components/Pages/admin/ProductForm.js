import React from "react";

// class ProductForm extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
            
//         }
//     }

//     // onProductChange = (e) => {
//     //     const product = e.target.value;
//     //     this.setState(() => ({product: product}));
//     // }

//     // onSubmit = (e) => {
//     //     e.preventDefault();

//     //     if(!this.state.product){
//     //         this.setState(() => ({error: "Please Enter Product Name"}))
//     //     }
//     //     else{
//     //         this.setState(() => ({error: ''}));
//     //         this.props.onSubmit({
//     //             product: this.state.product
//     //         })
//     //         this.setState(() => ({
//     //             product: ''
//     //         }))
//     //     }
//     // }

//     render () {
//         return (
//             <div>
//                 <form onSubmit = {this.onSubmit}>
//                     <input 
//                     name = "Product"
//                     type = "text"
//                     placeholder = "Enter Grocery Items"
//                     value = {this.state.product}
//                     onChange = {this.onProductChange}
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

export default ProductForm;