import React from "react";
import styles from './scss/styles.module.scss';

const Modal = ({ setModalVisible, prod }) => {

    return (
        <>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>{prod.description}</p>
                        <div className={styles.bigImgWrapper}>
                            <img className={styles.bigProductImg} src={prod.image} />
                        </div>
                        <button className={styles.modalButton} onClick={() => setModalVisible(false)}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;