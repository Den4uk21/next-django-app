import Link from 'next/link'
import { Card } from 'semantic-ui-react'

import { ISection } from '../../types/categories/types'

export const Section = ({ name, url }: ISection) => {
  return (
    <Card fluid color="blue">
      <Card.Content>
        <Card.Header>
          <Link href="/advertisement/list/[section_url]" as={`/advertisement/list/${url}`}>
            <a>{name}</a>
          </Link>
        </Card.Header>
      </Card.Content>
    </Card>
  )
}