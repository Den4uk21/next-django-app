import * as queryString from 'query-string'

export const queryUrlUtil = (queries: any): string => {
  const parsed = queryString.parse(location.search)

  for(let key in queries) {
    parsed[key] = queries[key]
  }
  
  const stringified = queryString.stringify(parsed)
  return `${location.pathname}?${stringified}`
}