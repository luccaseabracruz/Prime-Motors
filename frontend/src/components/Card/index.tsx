import { StyledCardContainer } from './style';
import carSvg from '../../utils/images/mustang.svg';
import { ICardProps } from '../../interfaces';

export const Card = ({ car }: ICardProps) => {
  return (
    <StyledCardContainer>
      <div className='imageContainer'>
        <img src={carSvg} alt='Car image' />
      </div>
      <h3 className='title heading-7-600'>
        {car.brand} - {car.model}
      </h3>
      <p className='description text-style-text-body-2-400'>
        {car.description}
      </p>
      <div className='profile'>
        <div>SL</div>
        <p className='name text-style-text-body-2-500'>Samuel Leão</p>
      </div>
      <div className='carInfo'>
        <div className='tagsContainer text-style-text-body-2-500'>
          <p className='tag'>{car.kilometrage} km</p>
          <p className='tag'>{car.year}</p>
        </div>

        <p className='price heading-7-500'>
          {parseFloat(car.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
      </div>
    </StyledCardContainer>
  );
};
