import { useCar, useModal } from '../../hooks';
import { StyledListPicture } from './style';

interface IListingPagePictureProps {
  carPhotoUrl: string;
}

export const ListingPagePicture = ({
  carPhotoUrl
}: IListingPagePictureProps) => {
  const { setSelectedCarPhotoUrl } = useCar();
  const { handleShowModal } = useModal();

  const handlePhotoClick = () => {
    setSelectedCarPhotoUrl(carPhotoUrl);
    handleShowModal('carPhoto');
  };
  return (
    <StyledListPicture onClick={handlePhotoClick}>
      <img src={carPhotoUrl} alt='foto secundária do carro' />
    </StyledListPicture>
  );
};
