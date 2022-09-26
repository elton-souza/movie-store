import { Pagination } from "semantic-ui-react";

interface PaginationProps {
  activePage: number;
  totalPages: number;
  setActivePage: (value: number) => void;
}

export default function Paginate({
  activePage,
  totalPages,
  setActivePage,
}: PaginationProps) {
  const handlePaginationChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: any
  ) => {
    setActivePage(data.activePage);
  };

  return (
    <Pagination
      defaultActivePage={1}
      activePage={activePage}
      onPageChange={handlePaginationChange}
      showFirstAndLastNav={true}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      totalPages={totalPages}
      
    >
      <Pagination.Item active style={{ color: "blue" }} />
    </Pagination>
  );
}
