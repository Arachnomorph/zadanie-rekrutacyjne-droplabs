import React from "react";
import styles from './scss/styles.module.scss'

const Modal = ({ setModalVisible, prod }) => {

    return (
        <>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>{prod.title}</p>
                        <p>{prod.price}</p>
                        <p>{prod.description}</p>
                        <img className={styles.productImg} src={prod.image} />
                    </div>
                    <button onClick={() => { console.log(prod); setModalVisible(false) }}>
                        Ok
                    </button>
                </div>
            </div>
        </>

    );
};

export default Modal;