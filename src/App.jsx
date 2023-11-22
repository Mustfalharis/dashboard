
import { useEffect, useState } from "react";
import Container from "./Components/Container/container";
import Header from "./Components/Header/header";
import SearchBox from "./Components/SearchBox/searchBox";
import Space from "./Components/Space";
import "./App.css";
import Edit from './Assets/edit.png';
import del from "./Assets/delete.png";
import Model from "./Components/Model/model";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useAppStore } from "./store";
const App = () => {
    const { searchKey} = useAppStore();
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [id, setID] = useState(0);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [price, SetPrice] = useState("");
    const getProducts = async () => {
        setIsLoading(true);
        console.log(searchKey);
        try {
            let resp = await fetch(
                `https://dummyjson.com/products/search?q=${searchKey}&limit=5`
            );
            let data = await resp.json();
            console.log(data);
            setProducts(data.products);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const handlDelete = async (id) => {
        try {
            let resp = await fetch(
                `https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
            }
            );
            let data = await resp.json();
            if (data.isDeleted === true) {
                alert("Successfully deleted")
            } {
                alert("Somthing Error");
            }

        } catch (error) {
            console.log(error);
        }
    };
    const handelUpdateItem = async () => {
        let resp = await fetch(
            `https://dummyjson.com/products/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title
            })
        })
        let data = await resp.json();
        if (data.title === title) {
            alert("Update");
        }
        else {
            alert("false");
        }
    }
    const showModal = (newId) => {
        setID(newId);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handelUpdateItem();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    useEffect(() => {
        getProducts();
    }, [searchKey]);
    return <div>
        <Header />
        <Space height={55} />
        <Container>
            <div className="form-button">
                <SearchBox />
                <Model />

            </div>
            <Space height={22} />
            {
                 isLoading===false ?
                <div>
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        {products.map((el) => (
                            <tr>
                                <td className="id">{el.id}</td>
                                <td className="title">{el.title}</td>
                                <td className="des">{el.description}</td>
                                <td className="price">{el.price}</td>
                                <td className="action">
                                    <img src={Edit} onClick={(event) => showModal(el.id)} />
                                    <img src={del} onClick={(event) => handlDelete(el.id)} />
                                </td>
                            </tr>
                        ))}
                    </table>

                </div>
                :<center><span class="loader"></span></center> 
            }

            :

        </Container>
        {/* /// model  */}
        <Modal className='Model' title="Update New Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
    </div >
}
export default App;