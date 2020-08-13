import { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Accordion, Label } from 'semantic-ui-react'

import { IFilter } from '../../types/advertisement/types'
import { defaultFilters } from '../../types/advertisement/constants'

const optionsPubDate = [
  { text: 'All', value: '' },
  { text: 'Today', value: 'today' },
  { text: 'Yesterday', value: 'yesterday' },
  { text: 'Past 7 days', value: 'week' },
  { text: 'This month', value: 'month' },
  { text: 'This year', value: 'year' }
]

const optionsDelivery = [
  { text: 'All', value: '' },
  { text: 'Yes', value: true },
  { text: 'No', value: false },
]

export const Filters = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [filters, setFilters] = useState<IFilter>(defaultFilters)
  const { push } = useRouter()

  const handleChange = (e, { name, value }) => setFilters({ ...filters, [name]: value })

  const handleSubmit = () => {
    return push('/advertisement/list/[section_url]', `/advertisement/list/smartphones/?search=${filters.search}&price_min=${filters.price_min}&price_max=${filters.price_max}&delivery=${filters.delivery}&pub_date=${filters.pub_date}`)
  }

  return (
    <Accordion fluid styled>
      <Accordion.Title
        active={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <Label color='teal' content="Filters and Search" />
      </Accordion.Title>
      <Accordion.Content active={isActive}>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid placeholder='Minimum price' name="price_min" onChange={handleChange} />
            <Form.Input fluid placeholder='Maximum price' name="price_max" onChange={handleChange} />
            <Form.Select
              fluid
              options={optionsPubDate}
              placeholder='Date of publication'
              name="pub_date"
              onChange={handleChange}
            />
            <Form.Select
              fluid
              options={optionsDelivery}
              placeholder='Delivery'
              name="delivery"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Input fluid placeholder='Search...' name="search" onChange={handleChange} />
          <Form.Button content='Filter and Search' />
        </Form>
      </Accordion.Content>
    </Accordion>
  )
}