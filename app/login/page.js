'use client';
import style from '../login.module.css';
import '../globals.css';
import next from '../about/next.jpg';
import Image from 'next/image';
const login = () => {

  return (
    <div>
      <h1>login</h1>
      <Image src={next} alt="me as a picture" width={500} height={400}></Image>
      <p className={style.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
        ipsa, <br /> cumque itaque expedita magni sed explicabo nostrum?
        Asperiores, sapiente.
      </p>
    </div>
  );
};

export default login;
