import React,{ useState } from "react";
import styles from './Menu.module.css';
import { Link } from './Link.js';
export const Menu =() => {
   const items = [
       {
           value:"Home",
           href:'/home',
       },
       {
           value:"About",
           href:'/about',
       },
       {
           value:"FAQ",
           href:'/faq',
       }
   ];
const [open,setOpen]= useState (true);


    return(

        <div className={styles.container}>
            <div className={styles.closeIcon} >X</div>
            <div className={styles.menu}>
        <nav>
            <div className={styles.burgerbtn}>
                <span></span>
            </div>
        </nav>

                <div className={styles.menu_content}>
     <Link items={items} />
            </div>
            </div>
        </div>

    )
};