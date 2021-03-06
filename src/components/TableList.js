import classNames from 'classnames'

import Pagination from './Pagination'

function TableList({ dataSource, columns, pagination, onPaginationChange }) {
  return (
    <>
      <div className="mx-auto my-8">
        <Pagination pagination={pagination} />
      </div>

      <table className="table-auto border-collapse w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            {columns.map((column) => (
              <th key={column.key} className="p-4 text-left">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, index) => (
            <tr
              key={data.id}
              className={classNames({ 'bg-gray-100': index % 2 === 0 })}
            >
              {columns.map((column) => {
                const { align, width, render = () => {} } = column

                const tdClassName = classNames('p-4', {
                  'text-left': align === 'left',
                  'text-center': align === 'center',
                  'text-right': align === 'right',
                })

                return (
                  <td
                    key={column.key}
                    className={tdClassName}
                    style={{ width }}
                  >
                    {render(data)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

TableList.defaultProps = {
  onPaginationChange: () => {},
}

export default TableList
