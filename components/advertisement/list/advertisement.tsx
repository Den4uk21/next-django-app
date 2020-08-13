import Link from 'next/link'

import { Card, Image, Icon } from 'semantic-ui-react'

import { IAdvertisement } from '../../../types/advertisement/types'

export const Advertisement = (advertisement: IAdvertisement) => {
  return (
    <Card>
      <Image src={advertisement.images[0].image} ui={false} />

      {advertisement.delivery ?(
        <Icon name="truck" color="teal" size="large" />
      ): <></>}
      
      <Card.Content>
        <Card.Header>
          <Link href="/advertisement/detail/[id]" as={`/advertisement/detail/${advertisement.id}`}>
            <a>{advertisement.title}</a>
          </Link>
        </Card.Header>

        <Card.Description>
          <h3>price: {advertisement.price}</h3>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {advertisement.pub_date} — {advertisement.location}
      </Card.Content>
    </Card>
  )
}