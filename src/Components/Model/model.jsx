import React, { useState } from 'react';
import { Button, Modal} from 'antd';
import "./button.css";
const Model = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title,setTitle]=useState("");
  const [des,setDes]=useState("");
  const [price,SetPrice]=useState("");
  const handeAddItem = async()=>{
    let resp = await fetch(
      'https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
          })
        })
   let data = await resp.json();
     if(data.title===title){
      alert("add");
     }
     else{
      alert("false");
     }
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handeAddItem();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className='button-add' onClick={showModal}>
        Open Modal
      </Button>
      <Modal className='Model' title="Add New Product"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p className='productName'>Product Name</p>
      <input  
      className='inputProdcutName' 
      placeholder='Ex: iphone x' 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <p className='productName'>Description</p>
      <input 
       className='inputdes' 
       placeholder='Ex: An apple mobile which is nothing like apple' 
       type="text"
       value={des}
       onChange={(e) => setDes(e.target.value)}
       />
      <p className='productName'>Product Price</p>
      <input 
       className='inputProdcutName'
        placeholder='Ex: 12,000'
         type="text"
         value={price}
         onChange={(e) => SetPrice(e.target.value)}
         />
      </Modal>
    </>
  );
};
export default Model;