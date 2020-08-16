import { GetServerSideProps } from 'next'

import { ImageCarousel } from '../../../components/advertisement/detail/imageCarousel'
import { DetailInfo } from '../../../components/advertisement/detail/detailInfo'
import { UserInfo } from '../../../components/advertisement/detail/userInfo'

import { AdvertisementsUrls } from '../../../types/advertisement/constants'
import { IAdvertisementDetail } from '../../../types/advertisement/types'

import styles from './ad-detail.module.sass'

interface IAdvertisementsDetailPageProps {
  advertisementDetail: IAdvertisementDetail
}

const AdvertisementsDetailPage = ({ advertisementDetail }: IAdvertisementsDetailPageProps) => {
  const { images, user, ...advertisement } = advertisementDetail

  return (
    <main className={styles.ad_detail_page}>
      <ImageCarousel images={images} />
      <UserInfo {...user} />
      <DetailInfo {...advertisement} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(AdvertisementsUrls.getAdvertisementDetail(params.id))
  const advertisementDetail: IAdvertisementDetail = await res.json()

  return {
    props: {
      advertisementDetail
    }
  }
}

export default AdvertisementsDetailPage