import { Card } from 'semantic-ui-react'

import { Advertisement } from './advertisement'

import { IAdvertisementLink } from '../../../types/advertisement/types'

import styles from './advertisement.module.sass'

interface IAdvertisementListProps {
  advertisements: IAdvertisementLink[]
}

export const AdvertisementList = ({ advertisements }: IAdvertisementListProps) => {
  return (
    <Card.Group className={styles.ad_list}>
      {advertisements.map((advertisement) => (
        <div key={advertisement.id} className={styles.wrapper}>
          <Advertisement {...advertisement} />
        </div>
      ))}
    </Card.Group>
  )
}