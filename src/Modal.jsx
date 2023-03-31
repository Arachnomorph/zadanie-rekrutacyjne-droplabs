import React from "react";
import styles from './scss/styles.module.scss'

const Modal = ({ setModalVisible, allProducts}) => {



    return (
        <>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                    <p>{allProducts[1].title}</p>
                    <p>{allProducts[1].price}</p>
                    <p>{allProducts[1].description}</p>
                    <img className={styles.productImg} src={allProducts[1].image}/>
                    </div>
                    <button onClick={() => { setModalVisible(false)}}>
                        Ok
                    </button>
                </div>
            </div>
        </>
        
    );
};

export default Modal;