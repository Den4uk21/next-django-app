export interface IAdvertisement {
  id: string,
  title: string,
  price: number,
  delivery: boolean,
  location: string,
  images: [{ id: string, image: string }],
  pub_date: string
}

export interface IAdvertisementDetail extends IAdvertisement {
  section: string,
  description: string
}

export interface IFilter {
  [key: string]: string | string[]
}