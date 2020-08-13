import { IFilter } from './types'

export const defaultFilters: IFilter = {
  search: '',
  price_min: '',
  price_max: '',
  delivery: '',
  pub_date: ''
}

const getAdvertisementsList = (section_url: string | string[], filters: IFilter = defaultFilters) => {
  filters = filters.length ? filters : defaultFilters
  return `http://127.0.0.1:8000/api/v1/advertisement/list/${section_url}/?search=${filters.search}&price_min=${filters.price_min}&price_max=${filters.price_max}&delivery=${filters.delivery}&pub_date=${filters.pub_date}`
}
const getAdvertisementDetail = (id: string | string[]) => `http://127.0.0.1:8000/api/v1/advertisement/detail/${id}`

export const AdvertisementsUrls = {
  getAdvertisementsList,
  getAdvertisementDetail
}