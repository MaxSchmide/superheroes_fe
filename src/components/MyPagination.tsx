import classNames from "classnames";
import { Pagination } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getPagesArray } from "../utils/getPagesArray";
import { SearchLink } from "./SearchLink";

type Props = {
  total: number;
  currentPage: number;
  perPage: number;
};

const MyPagination = ({ total, currentPage, perPage }: Props) => {
  const totalPages = Math.ceil(total / perPage);
  const items = getPagesArray(totalPages, currentPage);

  const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
  const prevPage = currentPage === 1 ? currentPage : currentPage - 1;

  return (
    <Pagination>
      <li
        className='pagination__prev'
        aria-disabled={currentPage === 1}
      >
        <SearchLink params={{ page: prevPage.toString() }}>
          <FiChevronLeft />
        </SearchLink>
      </li>
      {items.map((page) => (
        <li
          key={page}
          className={classNames("pagination__item", {
            active: currentPage === page,
          })}
        >
          <SearchLink params={{ page: page.toString() }}>{page}</SearchLink>
        </li>
      ))}
      <li
        className='pagination__next'
        aria-disabled={currentPage === totalPages}
      >
        <SearchLink params={{ page: nextPage.toString() }}>
          <FiChevronRight />
        </SearchLink>
      </li>
    </Pagination>
  );
};

export default MyPagination;
