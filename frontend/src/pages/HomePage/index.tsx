import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledMain } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useCar, useLayout, useModal } from '../../hooks';
import GenericModal from '../../components/Modal/ModalGeneric';
import PaginationComponent from '../../components/Pagination';
import RangeFilter from '../../components/RangeFilter';

export const HomePage = () => {
  const { windowWidth } = useLayout();
  const {
    carBrands,
    carModels,
    carColors,
    carYears,
    carFuelTypes,
    setfilterCar,
    setFilteredCars,
    isFilterActive,
    setIsFilterActive,
    carMaxKm,
    carMinKm,
    carMinPrice,
    carMaxPrice,
    setCarMaxKm,
    setCarMaxPrice,
    setCarMinKm,
    setCarMinPrice,
    carPerPage
  } = useCar();

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = (filter: string) => {
    setfilterCar(filter);
    setIsFilterActive(true);
  };

  const handleClearFilter = () => {
    setfilterCar('');
    setFilteredCars([]);

    setIsFilterActive(false);
  };

  const { showModal } = useModal();

  return (
    <>
      {showModal && <GenericModal type={showModal} />}

      <Header />
      <StyledMain>
        <section className='welcomeBox'>
          <h1 className='heading-5-600'>Prime Motors</h1>
          <p className='heading-6-600'>
            A melhor plataforma de anúncios de carros do país
          </p>
        </section>
        <section className='listAndFilter'>
          <div
            className={
              showFilters
                ? 'filterContainer showFilters slideRigth'
                : ' filterContainer hideFilters'
            }
          >
            {windowWidth <= 1024 && (
              <div className='filterHeader'>
                <p className='filterTitle heading-7-500'>Filtro</p>
                <button
                  onClick={() => {
                    setShowFilters(!showFilters);
                  }}
                  className='closeBtn'
                >
                  <AiOutlineClose />
                </button>
              </div>
            )}

            <div className='attributesContainer'>
              <div className='attribute'>
                <p className='title'>Marca</p>
                {carBrands.map((brand) => (
                  <p
                    className='attributeOption'
                    key={brand}
                    onClick={() => handleFilterClick(brand)}
                  >
                    {brand}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Modelo</p>
                {carModels.map((model) => (
                  <p
                    className='attributeOption'
                    key={model}
                    onClick={() => handleFilterClick(model)}
                  >
                    {model}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Cor</p>
                {carColors.map((color) => (
                  <p
                    className='attributeOption'
                    key={color}
                    onClick={() => handleFilterClick(color)}
                  >
                    {color}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Ano</p>
                {carYears.map((year) => (
                  <p
                    className='attributeOption'
                    key={year}
                    onClick={() => handleFilterClick(year)}
                  >
                    {year}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Combustível</p>
                {carFuelTypes.map((fuelType) => (
                  <p
                    className='attributeOption'
                    key={fuelType}
                    onClick={() => handleFilterClick(fuelType)}
                  >
                    {fuelType}
                  </p>
                ))}
              </div>

              <RangeFilter
                title='Quilometros Rodados'
                setStateMinValue={setCarMinKm}
                setStateMaxValue={setCarMaxKm}
                setIsFilterActive={setIsFilterActive}
                stateMinValue={carMinKm}
                stateMaxValue={carMaxKm}
                isFilterActive={isFilterActive}
              />
              <RangeFilter
                title='Preço'
                setStateMinValue={setCarMinPrice}
                setStateMaxValue={setCarMaxPrice}
                setIsFilterActive={setIsFilterActive}
                stateMinValue={carMinPrice}
                stateMaxValue={carMaxPrice}
                isFilterActive={isFilterActive}
              />

              {isFilterActive && (
                <div className='filterButton__container'>
                  <button
                    className='filterBtn buttons-style-button-size-big'
                    onClick={handleClearFilter}
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='ListPaginationContainer'>
            <ul className='carsList'>
              {carPerPage.map(
                (car) => car.published && <Card key={car.id} car={car} />
              )}
            </ul>
            <div className='pagination'>
              {windowWidth <= 1024 && (
                <button
                  onClick={() => {
                    setShowFilters(!showFilters);
                  }}
                  className='filterBtn buttons-style-button-size-big'
                >
                  Filtros
                </button>
              )}

              <PaginationComponent page='home' />
            </div>
          </div>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
