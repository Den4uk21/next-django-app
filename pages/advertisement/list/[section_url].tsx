import { GetServerSideProps } from 'next'

import { AdvertisementList } from '../../../components/advertisement/list/advertisementsList'
import { Filters } from '../../../components/filters/filters'

import { AdvertisementsUrls } from '../../../types/advertisement/constants'
import { IAdvertisement } from '../../../types/advertisement/types'

import styles from './ad-list-page.module.sass'

interface IAdvertisementsListPageProps {
  advertisements: IAdvertisement[]
}

const AdvertisementsListPage = ({ advertisements }: IAdvertisementsListPageProps) => {
  return (
    <main className={styles.ad_list_page}>
      <Filters />
      
      <h1 className={styles.title}>
        Advertisements
      </h1>
      
      <AdvertisementList advertisements={advertisements} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { section_url, ...filters } = query
  const res = await fetch(AdvertisementsUrls.getAdvertisementsList(section_url, filters))
  const advertisements: IAdvertisement[] = await res.json()

  return {
    props: {
      advertisements
    }
  }
}

export default AdvertisementsListPage