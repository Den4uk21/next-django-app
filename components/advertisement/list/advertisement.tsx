import Link from 'next/link'

import { Card, Image, Icon } from 'semantic-ui-react'

import { IAdvertisementLink } from '../../../types/advertisement/types'

export const Advertisement = (advertisement: IAdvertisementLink) => {
  return (
    <Card fluid>
      <Image src={advertisement.images[0].image} ui={false} />

      {advertisement.delivery ?(
        <Icon name="truck" color="teal" size="large" />
      ): <></>}
      
      <Card.Content>
        <Card.Header>
            <div className="link" style={{height: '70px'}}>
              <Link href="/advertisement/detail/[id]" as={`/advertisement/detail/${advertisement.id}`}>
                <a>{advertisement.title}</a>
              </Link>
            </div>
        </Card.Header>

        <Card.Description>
          <h3>price: {advertisement.price}</h3>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>{advertisement.pub_date} — {advertisement.location}</p>
      </Card.Content>
    </Card>
  )
}