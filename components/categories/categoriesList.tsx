import { Card } from 'semantic-ui-react'

import { Category } from './category'

import { ICategory } from '../../types/categories/types'

import styles from './category.module.sass'

interface ICategoriesListProps {
  categories: ICategory[]
}

export const CategoriesList = ({ categories }: ICategoriesListProps) => {
  return (
    <Card.Group className={styles.categories_list}>
      {categories.map((category) => (
        <div key={category.url} className={styles.wrapper}>
          <Category {...category} />
        </div>
      ))}
    </Card.Group>
  )
}