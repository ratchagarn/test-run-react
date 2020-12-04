import classNames from 'classnames'

function TableList({ dataSource, columns, rowKey }) {
  return (
    <table className="table-auto border-collapse w-full bg-gray-50">
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
        {dataSource.map((data) => (
          <tr key={data.id}>
            {columns.map((column) => {
              const { align, width, render = () => {} } = column

              const tdClassName = classNames('p-4', {
                'text-left': align === 'left',
                'text-center': align === 'center',
                'text-right': align === 'right',
              })

              return (
                <td key={column.key} className={tdClassName} style={{ width }}>
                  {render(data)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
      {/* <tbody>
        {columns.map((column) => {
          const { align, render = () => {} } = column

          const tdClassName = classNames('p-4', {
            'text-left': align === 'left',
            'text-center': align === 'center',
            'text-right': align === 'right',
          })

          return (
            dataSource.map((data) => (
              <tr key={data.id}>
                {Object.keys(data).map((dataKey) => {
                  const rowData = data[dataKey]

                  return (
                    <td key={dataKey} className={tdClassName}>{render(rowData)}</td>
                  )
                })}
              </tr>
            ))
          )
        })}
      </tbody> */}
    </table>
  )
}

export default TableList
