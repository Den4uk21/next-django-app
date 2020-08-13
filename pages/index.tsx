import { GetServerSideProps } from 'next'

import { CategoriesList } from '../components/categories/categoriesList'

import { CategoriesUrls } from '../types/categories/constants'
import { ICategory } from '../types/categories/types'

import styles from './start-page.module.sass'

interface IStartPageProps {
  categories: ICategory[]
}

const StartPage = ({ categories }: IStartPageProps) => {
  return (
    <main className={styles.start_page}>
      <h1 className={styles.title}>
        Categories
      </h1>

      <CategoriesList categories={categories} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(CategoriesUrls.getCategoriesUrl())
  const categories: ICategory[] = await res.json()

  return {
    props: {
      categories
    }
  }
}

export default StartPage