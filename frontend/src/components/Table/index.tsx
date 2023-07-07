import styled from 'styled-components'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
  getFilteredRowModel,
  type FilterFn,
  ColumnFiltersState
} from '@tanstack/react-table'
import { useState } from 'react'
import { faCircleCheck, faFilter, faSackXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@components/Button'
import { FilterDialog } from './FilterDialog'
import { rankItem } from '@tanstack/match-sorter-utils'
import { Options } from './Options'
import { ImageDisplay } from './Displays/Image'
import { IconDisplay } from './Displays/Icon'

const TableTag = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid white;
  border-radius: 0.5rem;
  overflow: hidden;
`

const TableHead = styled.thead`
  background-color: #fff;
  color: ${props => props.theme.textPrimary};
  border-bottom: 0.1rem solid white;
`

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: #f5f5f5;
  }
`

const TableBody = styled.tbody`
  background-color: #f4f4f4;
  color: ${props => props.theme.textPrimary};
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    transition: 100ms ease-in-out;
    background-color: #f6f6f6;
  }
`

const BooleanDisplay = styled.span<{active: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 6px;
  background-color: ${props => props.active ? props.theme.colors.success : props.theme.colors.error};
  color: white;
  font-weight: 600;
  gap: 5px;
`

const TagDisplay = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 5px 10px;
  background-color: ${props => props.theme.colors.primaryLightest};
  color: white;
  font-weight: 600;
`

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

export const Table = ({ columns, data }: TableProps) => {
  const columnHelper = createColumnHelper<any>()
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [filterDialog, setFilterDialog] = useState(false)
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const selectColumn = columnHelper.display({
    id: 'select',
    cell: ({ row }) => <input
      type="checkbox"
      onChange={row.getToggleSelectedHandler()}
      checked={row.getIsSelected()}
    />,
    footer: info => info.column.id
  })

  const visibleColumns = columns.filter(column => column.options?.table === true)
  const columnsDefinedByUser = visibleColumns.map(column => {
    switch (column.type) {
      case 'image':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => <ImageDisplay src={info.row.original[column.accessor]} />,
          footer: info => info.column.id
        })

      case 'icon':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => <IconDisplay src={info.row.original[column.accessor]} />,
          footer: info => info.column.id
        })

      case 'date':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => <span>{new Date(info.row.original.date).toLocaleDateString('pt-br')}</span>,
          footer: info => info.column.id
        })
      
      case 'boolean':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => <BooleanDisplay active={info.renderValue()}>
            {info.renderValue() ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faSackXmark} />}
            {info.renderValue() ? 'True' : 'False'}
          </BooleanDisplay>,
          footer: info => info.column.id,
        })
      
      case 'tag': 
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => <TagDisplay>{info.renderValue()}</TagDisplay> ,
          footer: info => info.column.id,
        })
      
      case 'string':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => info.renderValue(),
          footer: info => info.column.id
        })
      
      case 'number':
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => info.renderValue(),
          footer: info => info.column.id,
        })
      
      default:
        return columnHelper.accessor(column.accessor, {
          id: column.accessor,
          header: column.header,
          cell: info => info.renderValue(),
          footer: info => info.column.id,
        })
    }
  }
  )

  const optionColumn = columnHelper.accessor('options', {
    header: '',
    cell: ({row}) => <Options item={row.original} columns={columns}/>,
    footer: info => info.column.id
  })

  const columnsFinal = [selectColumn, ...columnsDefinedByUser, optionColumn]

  const table = useReactTable({
    columns: columnsFinal,
    data,
    state: {
      sorting,
      rowSelection,
      pagination,
      globalFilter,
      columnFilters
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    globalFilterFn: fuzzyFilter,
    enableRowSelection: true
  })

  return (
    <>
    <FilterContainer>
      <Filter onClick={() => setFilterDialog(true)}>
        <FontAwesomeIcon icon={faFilter} />
      </Filter>
      {filterDialog && (
        <FilterDialog
          fields={columns}
          onCloseFunction={() => setFilterDialog(false)}
          filterFn={setColumnFilters}
        />
      )}
    </FilterContainer>
    <TableTag>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </TableHeader>
            ))}
          </tr>  
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      </TableTag>
      <Footer>
        <Button
          type='button'
          label='Anterior'
          onClickFunction={() => table.previousPage()}
          width='300px'
          disabled={!table.getCanPreviousPage()}
        />
        <Button
          type='button'
          label='Próximo'
          onClickFunction={() => table.nextPage()}
          width='300px'
          disabled={!table.getCanNextPage()}
        />
      </Footer>
    </>
  )
}