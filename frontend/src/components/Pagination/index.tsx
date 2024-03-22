/* eslint-disable react-hooks/exhaustive-deps */
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useCar } from '../../hooks';
import { useEffect, useState } from 'react';
import StyledPaginationComponent from './style';

const PaginationComponent = ({ page }: { page: string }) => {
  const { allCars, setCarPerPage, filteredCars, sellersCars } = useCar();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage: number = 12;

  useEffect(() => {
    if (page === 'home') {
      if (filteredCars.length > 0) {
        setTotalPages(Math.ceil(filteredCars.length / perPage));
        setCarPerPage([
          ...filteredCars.slice(
            perPage * (currentPage - 1),
            perPage * currentPage
          )
        ]);
      } else {
        setTotalPages(Math.ceil(allCars.length / perPage));
        setCarPerPage([
          ...allCars.slice(perPage * (currentPage - 1), perPage * currentPage)
        ]);
      }
    }

    if (page === 'userProfile') {
      setTotalPages(Math.ceil(sellersCars.length / perPage));
      setCarPerPage([
        ...sellersCars.slice(perPage * (currentPage - 1), perPage * currentPage)
      ]);
    }
  }, [allCars, currentPage, filteredCars, sellersCars]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allCars, filteredCars]);

  return (
    <StyledPaginationComponent>
      <div className='pagesAndButton heading-6-500'>
        <p>
          {currentPage} <span> de {totalPages}</span>
        </p>
        <div className='previousNextBtnContainer'>
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            className={
              currentPage > 1
                ? 'heading-6-500'
                : 'pagination__button__disabled heading-6-500'
            }
          >
            <BiChevronLeft /> Anterior
          </button>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage < totalPages
                ? 'heading-6-500'
                : 'pagination__button__disabled heading-6-500'
            }
          >
            Seguinte <BiChevronRight />
          </button>
        </div>
      </div>
    </StyledPaginationComponent>
  );
};

export default PaginationComponent;
