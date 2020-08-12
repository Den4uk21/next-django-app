import Link from 'next/link'
import { Card, Image } from 'semantic-ui-react'

import { ICategory } from '../../types/categories/types'

export const Category = ({ image, name, url }: ICategory) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <Link href="/categories/[category_url]" as={`/categories/${url}`}>
            <a>{name}</a>
          </Link>
        </Card.Header>
      </Card.Content>
    </Card>
  )
}