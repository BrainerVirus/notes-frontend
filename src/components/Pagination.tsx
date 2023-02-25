import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

type Props = {
  totalNotes: number;
  notesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

function Pagination({
  totalNotes,
  notesPerPage,
  setCurrentPage,
  currentPage,
}: Props) {
  const [pagesLoaded, setpagesLoaded] = useState<number[]>([]);
  const pages: number[] = [];
  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
      pages.push(i);
    }
    setpagesLoaded(pages);
  }, [totalNotes]);

  const handleGoToPreviousPage = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleGoToNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentPage < pagesLoaded.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="mx-4 flex items-center"
        onClick={handleGoToPreviousPage}
      >
        <MdKeyboardArrowLeft /> Previous
      </button>
      <p>
        Page {currentPage} of {pagesLoaded.length}
      </p>
      <button className="mx-4 flex items-center" onClick={handleGoToNextPage}>
        Next <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
