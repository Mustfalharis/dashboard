
import { useState } from "react";
import React, { useState } from 'react';
import { Modal } from "antd";
const Button = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk =async() => {
     
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return <>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </>
}
export default Button;