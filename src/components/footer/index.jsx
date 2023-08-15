import React from 'react'
import { footerList } from '../../helpers/index'
import { Link } from 'react-router-dom'
import brand from '../../images/brand.png'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__list}>
        {
          footerList.map((link, i) => (
            <Link key={i} to={link.path} className={styles.footer__link}>
              {link.name}
            </Link>
          ))
        }
      </div>
      <div className={styles.footer__info}>
        <p className={styles.footer__text}>© 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних</p>
        <p className={styles.footer__text}>Данные получены с сайта themoviedb.org</p>
      </div>
      <img src={brand} alt="brand" className={styles.footer__brand} />
    </footer>
  )
}

export default Footer