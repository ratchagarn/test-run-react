import { Link } from 'react-router-dom'
import classNames from 'classnames'
import range from 'lodash/range'

function TableList({ dataSource, columns, pagination, onPaginationChange }) {
  return (
    <>
      <table className="table-auto border-collapse w-full bg-white">
        <thead>
          <tr>
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

      <div className="flex flex-wrap mt-8">
        {range(1, pagination.pages).map((page) =>
          pagination.page === page ? (
            <span key={page} className="flex-initial m-1 font-bold text-lg">
              {page}
            </span>
          ) : (
            <Link
              key={page}
              className="flex-initial m-1 text-blue-600 hover:underline cursor-pointer text-lg"
              to={`?page=${page}`}
            >
              {page}
            </Link>
          )
        )}
      </div>
    </>
  )
}

TableList.defaultProps = {
  onPaginationChange: () => {},
}

export default TableList
