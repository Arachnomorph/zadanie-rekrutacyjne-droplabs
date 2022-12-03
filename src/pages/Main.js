import React from "react";
import styles from '.././scss/styles.module.scss'

const Main = () => {
    return (<div className={styles.mainContainer}>
        <img src="https://picsum.photos/1000" />
        <p>Integer efficitur condimentum odio, at consequat ante interdum ac. Nam ac felis ac enim eleifend semper sed eu quam. Nulla turpis enim, tempus ac diam maximus, fermentum condimentum arcu. Duis semper neque a rutrum accumsan. Nulla sed erat sed massa iaculis lacinia. Ut neque turpis, consectetur non consectetur quis, tempor non eros. Sed odio quam, varius vitae orci sed, auctor rutrum erat. Ut id laoreet augue. Phasellus ac vehicula dolor. Donec ac tortor a ipsum sollicitudin ultrices et eget nunc. Proin et magna congue, bibendum ante sit amet, condimentum justo.</p>
    </div>
    )
};

export default Main;