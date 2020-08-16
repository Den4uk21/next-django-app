import * as queryString from 'query-string'
import { IFilter } from './types'

const getAdvertisementsList = (section_url: string | string[], filters: IFilter) => {
  const stringified = queryString.stringify(filters)
  return `http://127.0.0.1:8000/api/v1/advertisement/list/${section_url}/?${stringified}`
}
const getAdvertisementDetail = (id: string | string[]) => `http://127.0.0.1:8000/api/v1/advertisement/detail/${id}`

export const AdvertisementsUrls = {
  getAdvertisementsList,
  getAdvertisementDetail
}