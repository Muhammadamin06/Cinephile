import React from 'react'
import {FaHome} from 'react-icons/fa'
import Container from '../layout/Container'
import notfound from '../images/notfound.jpg'
import styles from './pages.module.scss'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
      <Container className={styles.page__container}>
        <img src={notfound} alt="not found" className={styles.page__notfound} />
        <button className={styles.page__back} onClick={() => navigate(`/`)}>
          <FaHome />
          <span>Вернутся назад</span>
        </button>
      </Container>
    </div>
  )
}

export default NotFound