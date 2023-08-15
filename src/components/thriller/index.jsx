import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import NotFound from '../../pages/NotFound'
import Loader from '../loader'
import YouTube from 'react-youtube'
import styles from './thriller.module.scss'
import Container from '../../layout/Container'

function Thriller() {
    const {id} = useParams()
    const [thriller, loading, error] = useFetch('thriller',`/movie/${id}/videos`)
    if (loading || error) {
        return <Loader />
    }
    console.log(thriller);
  return (
    <div className={styles.thriller}>
          <Container>
              {thriller && <YouTube videoId={thriller?.results[0]?.key} opts={{width:"100%",height:"700px"}} />}
          </Container>
    </div>
  )
}

export default Thriller