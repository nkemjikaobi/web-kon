import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

interface CustomPaginationProps {
  forcePage: number;
  initialPage?: number;
  pageCount: number;
  onChange: (page: number) => void;
}

const CustomPagination = ({ forcePage, initialPage, onChange, pageCount }: CustomPaginationProps) => {
  const [page, setPage] = useState<number>(0);

  const hasClickedNumber = useRef<boolean>(false);

  const handlePageChange = (page: number) => {
    hasClickedNumber.current = true;

    setPage(page);
  };

  useEffect(() => {
    if (hasClickedNumber.current) {
      onChange(page);
    }
  }, [page]);

  return (
    <ReactPaginate
      activeClassName="font-bold"
      breakLabel="..."
      breakLinkClassName="block py-2 px-3 leading-tight text-gray-500 bg-white border border-citiBlue-b60 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-disabled"
      containerClassName="flex items-center -space-x-px w-fit font-nunitoSans text-14"
      disableInitialCallback={true}
      forcePage={forcePage - 1}
      initialPage={initialPage}
      marginPagesDisplayed={pageCount > 5 && page > 3 ? 1 : 2}
      nextLabel="next"
      nextLinkClassName="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-[1px] border border-citiBlue-b60 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      onPageChange={(data) => handlePageChange(data.selected + 1)}
      pageCount={pageCount}
      pageLinkClassName="block py-2 px-3 leading-tight text-gray-500 bg-white border border-citiBlue-b60 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      pageRangeDisplayed={0}
      previousLabel="previous"
      previousLinkClassName="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-[1px] border border-citiBlue-b60 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    />
  );
};

CustomPagination.defaultProps = {
  initialPage: undefined,
};

export default CustomPagination;
