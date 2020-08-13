import { GetServerSideProps } from 'next'

import { SectionsList } from '../../components/sections/sectionsList'

import { CategoriesUrls } from '../../types/categories/constants'
import { ISection } from '../../types/categories/types'

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(CategoriesUrls.getSectionUrl(params.category_url))
  const sections: ISection[] = await res.json()

  return {
    props: {
      sections
    }
  }
}

export default SectionsPage