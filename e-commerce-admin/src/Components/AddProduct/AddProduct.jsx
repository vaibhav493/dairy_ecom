import React, { useState } from "react";
import "./AddProduct.css";
// import upload_area from "../Assets/upload_area.svg";
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

  // const userId = localStorage.getItem("user-admin-credential")
  const userId = JSON.parse(localStorage.getItem("user-admin-credential"));
  // const[image,setImage] = useState(false);
  console.log("user id ->", userId);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"milk",
      selling_price:0,
      market_price:0,
      userID:userId,
      description:"",
      quantity:""
  });

  const AddProduct = async (e) => {

     if(productDetails.selling_price>productDetails.market_price){
      toast.error('Selling price should be less !', {
        icon: '👏',
        style: {
          height:"65px",
          width:"400px",
                  borderRadius: '10px',
          background: '#FF0000	',
          color: '#fff',
        },
      })

      return;
     }
    e.preventDefault()
   
     try{

      await fetch('http://localhost:4000/addproduct', {
           method: 'POST',
           headers: {
             Accept:'application/json',
             'Content-Type':'application/json',
           },
           body: JSON.stringify(productDetails),
         })
           .then((resp) => resp.json())
           .then((data) => {data.success?console.log("added !"):alert("Failed ! something went wrong")});

     }catch(err){
        console.log(err);
         alert("Failed ! found error ")
     }
              
       
      
   




  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  // const imageHandler = (e) => {
  //   setImage(e.target.files[0]);
  //   }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title......</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>


      <div className="addproduct-itemfield">
      <p>Product Description.....</p>
      <input type="text" name="description" value={productDetails.description} onChange={(e)=>{changeHandler(e)}} placeholder="add product description here...." />
    </div>



      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price....</p>
          <input type="number" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price.......</p>
          <input type="number" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="milk">Milk</option>
          <option value="paneer">Paneer</option>
          <option value="curd">Curd</option>
          <option value="buttermilk">ButterMilk</option>

          <option value="ghee">Ghee</option>

        </select> 
      </div>

      <div className="addproduct-itemfield">
      <p>Product Quantity</p>
      <select value={productDetails.size} name="size" className="add-product-selector" id="product_size_selector"  onChange={changeHandler}>
        <option value="1">1 ltr/kg</option>
        <option value="2">2 ltr/kg</option>
        <option value="3">3 ltr/kg</option>
        <option value="4">4 ltr/kg</option>
        <option value="5">5 ltr/kg</option>


      </select> 
    </div>

     <input value={productDetails.image} onChange={changeHandler} name="image" type="text" className="img_link" placeholder="paste product image link here........"/>
      <button className="addproduct-btn" onClick={(e)=>{
        
        AddProduct(e);
        toast.success('Successfully Added !', {
          icon: '👏',
          style: {
            height:"65px",
            width:"400px",
                    borderRadius: '10px',
            background: '#5cb85c	',
            color: '#fff',
          },
        })
      }}>ADD</button>
      <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </div>
  );
};

export default AddProduct;
