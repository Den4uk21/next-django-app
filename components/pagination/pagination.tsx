import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Pagination } from 'semantic-ui-react'
import * as queryString from 'query-string'

import { queryUrlUtil } from '../../utils/queryUrlUtil'

import styles from './pagination.module.sass'

interface PagesPaginationProps {
  totalPages: number
}

export const PagesPagination = ({ totalPages }: PagesPaginationProps) => {
  const [page, setPage] = useState<number>(1)
  const router = useRouter()

  useEffect(() => {
    setPage(location.search ? +queryString.parse(location.search).page : 1)
  })

  const onPageChange = (e, data) => {
    const queries = {
      page: data.activePage
    }
   
    router.push(router.pathname, queryUrlUtil(queries))
  }

  return (
    <div className={styles.pagination}>
      <Pagination
        activePage={page}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  )
}