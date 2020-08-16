import { IAdvertisementExtended } from '../../../types/advertisement/types'

import styles from './detail.module.sass'

export const DetailInfo = (advertisement: IAdvertisementExtended) => {
  return (
    <div className={styles.detail_wrapper}>
      <div className={styles.header}>
        <h1>{advertisement.title}</h1>
        <h2>Price: {advertisement.price}</h2>

        <div className={styles.tag}>
          <i>Section: {advertisement.section}</i>
        </div>

        {advertisement.delivery ? (
          <div className={styles.tag}>
            <i>Delivery</i>
          </div>
        ): <></>}
      </div>

      <div className={styles.content}>
        <h2>Description</h2>
        <p>{advertisement.description}</p>
      </div>

      <hr />

      <div className={styles.footer}>
        <p>{advertisement.pub_date}</p>
      </div>
    </div>
  )
}