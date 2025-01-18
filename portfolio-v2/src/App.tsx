import { useState } from 'react';
import Nav from './Nav.tsx';
import styles from './sass-modules/App.module.scss';

function App() {

  return (
    <>
      <div className={styles.background}>
        <Nav />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam quis dolorem hic consequatur. Tenetur perferendis velit ipsam? Atque, officiis? Vitae vero consectetur porro molestiae perferendis quos earum, illum officiis?
        </p>
      </div>
    </>
  )
}

export default App;
