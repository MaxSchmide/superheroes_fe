import { Pagination } from "react-bootstrap";
import { getPagesArray } from "../utils/getPagesArray";
import { Navigate } from "react-router-dom";
import { SearchLink } from "./SearchLink";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import classNames from "classnames";

type Props = {
  totalPages: number;
  currentPage: number;
  perPage: number;
};

const MyPagination = ({ totalPages, currentPage, perPage }: Props) => {
  const items = getPagesArray(totalPages, currentPage);

  if (currentPage > totalPages) {
    return (
      <Navigate
        to='/404'
        replace
      />
    );
  }

  const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
  const prevPage = currentPage === 1 ? currentPage : currentPage - 1;

  return (
    <Pagination>
      <li>
        <SearchLink
          params={{ page: prevPage.toString(), perPage: perPage.toString() }}
          className='pagination__prev'
          aria-disabled={currentPage === 1}
        >
          <FiChevronLeft />
        </SearchLink>
      </li>
      {items.map((page) => (
        <li>
          <SearchLink
            params={{ page: page.toString(), perPage: perPage.toString() }}
            key={page}
            className={classNames("pagination__item", {
              active: currentPage === page,
            })}
          >
            {page}
          </SearchLink>
        </li>
      ))}
      <li>
        <SearchLink
          params={{ page: nextPage.toString(), perPage: perPage.toString() }}
          className='pagination__next'
          aria-disabled={currentPage === totalPages}
        >
          <FiChevronRight />
        </SearchLink>
      </li>
    </Pagination>
  );
};

export default MyPagination;
