import { Card } from 'semantic-ui-react'

import { Section } from './section'

import { ISection } from '../../types/categories/types'

import styles from './section.module.sass'

interface ISectionsListProps {
  sections: ISection[]
}

export const SectionsList = ({ sections }: ISectionsListProps) => {
  return (
    <Card.Group className={styles.sections_list}>
      {sections.map((section) => (
        <Section key={section.url} {...section} />
      ))}
    </Card.Group>
  )
}