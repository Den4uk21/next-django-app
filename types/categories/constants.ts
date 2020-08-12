const getCategoriesUrl = () => 'http://127.0.0.1:8000/api/v1/advertisement/categories'
const getSectionUrl = (category_url: string | string[]) => `http://127.0.0.1:8000/api/v1/advertisement/categories/${category_url}/`

export const CategoriesUrls = {
  getCategoriesUrl,
  getSectionUrl
}