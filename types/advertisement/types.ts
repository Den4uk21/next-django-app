export interface IAdvertisement {
  id: string,
  title: string,
  price: number,
  delivery: boolean,
  pub_date: string
}

export interface IAdvertisementLink extends IAdvertisement {
  images: [{ id: string, image: string }],
  location: string
}

export interface IAdvertisementExtended extends IAdvertisement {
  section: string,
  description: string
}

export interface IAdvertisementPagination {
  totalPages: number,
  result: IAdvertisementLink[]
}

export interface ISomeUserInfo {
  id: string,
  fullname: string,
  avatar: string,
  phone: number,
  location: string
}

export interface IAdvertisementDetail extends IAdvertisementExtended {
  images: [{ id: string, image: string }],
  user: ISomeUserInfo,
}

export interface IFilter {
  [key: string]: string | string[]
}