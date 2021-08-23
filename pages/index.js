import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Masonry from 'react-masonry-css'

import { getImageData } from '../lib/images'
import { useState } from 'react'

const Home = () => {

  const [images, setImages] = useState([])
  const [imageSearch, setImageSearch] = useState('')
  const [didFetch, setDidFetch] = useState(false)

  const searchImages = (event) => {
    event.preventDefault();

    setDidFetch(false)
    // Fetch images from the api with the search string
    getImageData(imageSearch).then((imagesData) => {
      setImages(imagesData.results)
      setDidFetch(true)
    })

  }

  const handleInputChange = (event) => {
    setImageSearch(event.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Klog test</title>
        <meta name="description" content="Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Image Search
        </h1>

        <div className={styles.description}>
          <form onSubmit={(event) => searchImages(event)}>
            <input
              className={styles.input}
              type="text"
              id="imageSearch"
              name="imageSearch"
              value={imageSearch}
              placeholder="Type something..."
              onChange={(event) => handleInputChange(event) }
            />
            <button type="submit" className={styles.button}>Search</button>
          </form>
        </div>

        <p className={styles.description}>
          
        </p>
        <section>
          { images && images.length > 0 ?
            <Masonry
            breakpointCols={2}
            className={styles.imageGallery}
            columnClassName={styles.imageGalleryColumn}>
            {images.map(({ id, urls }) => (
            <div key={id} className={styles.imageResult}>
              <img src={urls.small} />
            </div>
            ))}
          </Masonry>
          : didFetch ? <p> No data to display. Try to type another word. </p> : null
          }
        </section>

      </main>
    </div>
  )
}

export default Home

