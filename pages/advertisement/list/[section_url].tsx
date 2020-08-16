import { GetServerSideProps } from 'next'

import { Filters } from '../../../components/filters/filters'
import { AdvertisementList } from '../../../components/advertisement/list/advertisementsList'
import { PagesPagination } from '../../../components/pagination/pagination'

import { AdvertisementsUrls } from '../../../types/advertisement/constants'
import { IAdvertisementPagination } from '../../../types/advertisement/types'

import styles from './ad-list-page.module.sass'

interface IAdvertisementsListPageProps {
  advertisements: IAdvertisementPagination
}

const AdvertisementsListPage = ({ advertisements }: IAdvertisementsListPageProps) => {
  return (
    <main className={styles.ad_list_page}>
      <Filters />
      <h1 className={styles.title}>
        Advertisements
      </h1>
      
      <AdvertisementList advertisements={advertisements.result} />
      <PagesPagination totalPages={advertisements.totalPages} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { section_url, ...filters } = query
  const res = await fetch(AdvertisementsUrls.getAdvertisementsList(section_url, filters))
  const advertisements: IAdvertisementPagination[] = await res.json()

  return {
    props: {
      advertisements
    }
  }
}

export default AdvertisementsListPage