import { GetStaticProps, GetStaticPaths } from 'next'
import { Loader } from 'semantic-ui-react'

import { SectionsList } from '../../components/sections/sectionsList'

import { CategoriesUrls } from '../../types/categories/constants'
import { ISection, ICategory } from '../../types/categories/types'

import styles from './sections-page.module.sass'

interface ISectionsPageProps {
  sections: ISection[]
}

const SectionsPage = ({ sections }: ISectionsPageProps) => {
  return (
    <main className={styles.sections_page}>
      <h1 className={styles.title}>
        Sections
      </h1>

      <SectionsList sections={sections} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(CategoriesUrls.getCategoriesUrl())
  const categories: ICategory[] = await res.json()

  const paths = categories.map((category) => ({
    params: { category_url: category.url },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(CategoriesUrls.getSectionUrl(params.category_url))
  const sections: ISection = await res.json()

  return {
    props: {
      sections
    }
  }
}

export default SectionsPage