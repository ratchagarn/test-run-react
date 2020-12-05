import { Link } from 'react-router-dom'
import range from 'lodash/range'
import PropTypes from 'prop-types'

const PAGE_RANGE = 2

function Pagination({ pagination }) {
  const totalPages = pagination.pages
  const currentPage = pagination.page
  const prevPage = currentPage - 1 < 1 ? 1 : currentPage - 1
  const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1

  const startPage = currentPage - PAGE_RANGE < 1 ? 1 : currentPage - PAGE_RANGE
  const endPage =
    currentPage + PAGE_RANGE + 1 > totalPages
      ? totalPages
      : currentPage + PAGE_RANGE + 1

  const selectablePages = range(startPage, endPage)

  return (
    <div className="flex flex-wrap items-baseline select-none">
      <PageLink page={prevPage} disabled={currentPage - 1 < 1}>
        ←
      </PageLink>
      {currentPage - PAGE_RANGE > 1 && (
        <PageLink page={1} selected={currentPage === 1}>
          1
        </PageLink>
      )}
      {currentPage > PAGE_RANGE * 2 && (
        <div className="flex-initial m-2 text-gray-400">...</div>
      )}
      {selectablePages.map((page) => (
        <PageLink key={page} page={page} selected={currentPage === page}>
          {page}
        </PageLink>
      ))}
      {totalPages - currentPage >= PAGE_RANGE * 2 && (
        <div className="flex-initial m-2 text-gray-400">...</div>
      )}
      <PageLink page={totalPages} selected={currentPage === totalPages}>
        {totalPages}
      </PageLink>
      <PageLink page={nextPage} disabled={nextPage >= totalPages}>
        →
      </PageLink>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
}

export default Pagination

function PageLink({ children, page, className, disabled, selected }) {
  let linkClassName =
    'flex-initial m-1 py-1 px-2 text-center text-blue-600 text-sm hover:bg-gray-100 rounded cursor-pointer transition-all'

  if (typeof className === 'string') {
    linkClassName += ' ' + className
  }

  return (
    <>
      {disabled ? (
        <div className="flex-initial m-1 py-1 px-2 text-center text-sm text-gray-300">
          {children}
        </div>
      ) : selected ? (
        <div className="flex-initial m-1 py-1 px-2 text-center bg-blue-500 text-sm text-white rounded">
          {children}
        </div>
      ) : (
        <Link className={linkClassName} to={`?page=${page}`}>
          {children}
        </Link>
      )}
    </>
  )
}
