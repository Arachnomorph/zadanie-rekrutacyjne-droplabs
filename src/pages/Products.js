import React, { useState, useEffect } from "react";
import styles from '../scss/styles.module.scss'
import Modal from "../Modal";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [basketTotal, setBasketTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState('');



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


    const productsList = allProducts.map(prod => (
        <li key={prod.id} className={styles.productWrapper}>
            <p className={styles.productName}>{prod.title}</p>
            <img className={styles.productImg} src={prod.image} />
            <div className={styles.priceWrapper}>
                <p className={styles.productPrice}>{prod.price}</p>
                <div>
                    <button id={prod.id} className={styles.button} onClick={() => {
                        setModalVisible(prod.id);
                    }}>
                        Info
                    </button>
                    {modalVisible === prod.id && <Modal prod={prod} setModalVisible={setModalVisible} />}
                </div>
                <button className={styles.button} onClick={addToBasket} id={prod.id}>
                    Add to Basket
                </button>
            </div>
        </li>
    )
    );

    return (
        <div className={styles.productsBackground}>
            <div className={styles.basketTotal}>
                Basket total: {basketTotal}
            </div>
            <ul className={styles.productList}>
                {productsList}
            </ul>
        </div>
    )
};

export default Products;