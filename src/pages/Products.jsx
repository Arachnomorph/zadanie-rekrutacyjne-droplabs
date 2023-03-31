import React, { useState, useEffect } from "react";
import styles from '../scss/styles.module.scss'
import Modal from "../Modal";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [basketTotal, setBasketTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setAllProducts(json)
            })
    }, [])

    const addToBasket = (e) => {
        e.preventDefault();
        const id = parseInt(e.target.id - 1);
        setBasketTotal(prev => prev + allProducts[id].price)
    }

    return (
        <>
            <div className={styles.basketTotal}>
                Basket total: {basketTotal}
            </div>
            <ul className={styles.productList}>
                {allProducts.map(prod => (
                    <li key={prod.id} className={styles.productWrapper}>
                        <p className={styles.productName}>{prod.title}</p>
                        <img className={styles.productImg} src={prod.image} />
                        <div className={styles.priceWrapper}>
                            <p className={styles.productPrice}>{prod.price}</p>
                            <div>
                                <button className={styles.productButton} onClick={() => setModalVisible(true)}>
                                    Info
                                </button>
                                    {modalVisible && <Modal allProducts={allProducts} setModalVisible={setModalVisible} />}
                            </div>
                            <button className={styles.productButton} onClick={addToBasket} id={prod.id}>Add to Basket</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Products;