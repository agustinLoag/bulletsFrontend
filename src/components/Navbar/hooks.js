import { useState } from "react";

const useModal = () => { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return {
        showModal,
        handleOk,
        handleCancel,
        isModalOpen
    }
 }

 export default useModal;