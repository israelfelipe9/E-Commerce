interface TableProps {
  columns: Array<{
    accessor: string
    header: string
    type: 'number' | 'string' | 'date' | 'boolean' | 'image' | 'tag' | 'icon'
    options?: {
      table?: boolean
      view?: boolean
      edit?: boolean
      delete?: boolean
      filter?: boolean
    }
  }>
  data: Array<T>
}