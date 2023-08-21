import { zodResolver } from '@hookform/resolvers/zod';
import {
  ButtonDisabled,
  ButtonOpacity,
  NegativeButton
} from '../../../styles/Buttons';
import { DefaultFormInput } from '../../DefaultFormInput';
import DefaultSelectInput from '../../DefaultSelectInput';
import DefaultTextArea from '../../DefaultTextArea';
import NewCarContainer from './style';
import { useFieldArray, useForm } from 'react-hook-form';
import { ICreateCar, createCarSchema } from './createCar.schema';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../../providers/CarProvider';
import { ModalContext } from '../../../providers/ModalProvider';
import { ICarByBrandFromKenzieAPI } from '../../../interfaces/cars.interfaces';
import { FiTrash2 } from 'react-icons/fi';

const CreateNewCar = () => {
  const [selectedCar, setSelectedCar] = useState(
    {} as ICarByBrandFromKenzieAPI | undefined
  );
  const [newCarFipValue, setNewCarFipValue] = useState<string | number>('');
  const [extraImages, setExtraImages] = useState<Array<string>>([
    'image03',
    'image04',
    'image05',
    'image06'
  ]);

  const [existingExtraImages, setExistingExtraImages] = useState<Array<string>>(
    []
  );

  const {
    handleCreateCar,
    modelsByBrandsFromApi,
    allBrandsFromApi,
    getAllCarsBrandsFromKenzieCars,
    getModelsCarsByBrandFromKenzieCars,
    carsByBrandFromApi
  } = useContext(CarContext);

  const { handleCloseModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<ICreateCar>({ resolver: zodResolver(createCarSchema) });

  const { append, remove } = useFieldArray({
    name: 'extraImages',
    control
  });

  useEffect(() => {
    getAllCarsBrandsFromKenzieCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addMoreImages = () => {
    setExtraImages(extraImages.sort());
    const firstImage = extraImages.shift()!;
    setExistingExtraImages([...existingExtraImages, firstImage]);
    append({ image: '' }); // includes value to form schema
  };

  const removeAddedImages = (id: string) => {
    const imageToRemove = existingExtraImages.find((image) => image === id);
    const indexImageToRemove = existingExtraImages.findIndex(
      (image) => image === id
    );

    existingExtraImages.splice(indexImageToRemove, 1);
    setExistingExtraImages([...existingExtraImages]);
    extraImages.push(imageToRemove!);
    setExtraImages([...extraImages, imageToRemove!]);
    setExtraImages(extraImages.sort());
    remove(indexImageToRemove); // remove value from form schema
  };

  const NewInputImg = () => {
    const newInput = existingExtraImages.map((image, index) => {
      return (
        <li key={image} className='imagesLinkInputs__extraInput'>
          <DefaultFormInput
            key={image}
            id={`${image}`}
            label={`Imagem ${image.slice(5, 7)} da Galeria`}
            placeholder='https://...'
            {...register(`extraImages.${index}.image`)}
            error={errors.extraImages?.[index]?.image}
          />
          <button
            className='button__deleteInput'
            type='button'
            onClick={() => removeAddedImages(image)}
          >
            <FiTrash2 />
          </button>
        </li>
      );
    });
    return <ul>{newInput}</ul>;
  };

  const objectSelectedCar = (model: string) => {
    const car = carsByBrandFromApi.find((car) => car.name === model);
    setNewCarFipValue(car!.value);

    if (car?.fuel === 1) {
      car.fuel = 'Flex';
    }

    if (car?.fuel === 2) {
      car.fuel = 'Híbrido';
    }

    if (car?.fuel === 3) {
      car.fuel = 'Elétrico';
    }

    car!.value = car!.value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    setSelectedCar(car);
  };

  const handlesubmitNewCar = (newCarFormData: ICreateCar) => {
    let good_deal = false;
    if (Number(newCarFipValue) / Number(newCarFormData.price) >= 1.05) {
      good_deal = true;
    }

    console.log(newCarFormData);

    const newCarData = {
      ...newCarFormData,
      good_deal: good_deal,
      fuel_type: selectedCar!.fuel,
      year: Number(selectedCar?.year),
      kilometrage: Number(newCarFormData?.kilometrage),
      carImages: [...newCarFormData.extraImages]
    };
    console.log(newCarData);
    handleCreateCar(newCarData);
  };

  return (
    <NewCarContainer>
      <p className='text-style-text-body-2-500'>Informações do veículo</p>
      <form onSubmit={handleSubmit(handlesubmitNewCar)}>
        <DefaultSelectInput
          onChange={async (event) => {
            await getModelsCarsByBrandFromKenzieCars(
              event.target.value.toLowerCase()
            );
          }}
          name={'brand'}
          array={allBrandsFromApi}
          about='Selecione a marca'
          label='Marca'
          register={register('brand')}
          error={errors.brand}
        />
        <DefaultSelectInput
          onChange={(event) => {
            objectSelectedCar(event.target.value.toLocaleLowerCase());
          }}
          name={'model'}
          array={modelsByBrandsFromApi}
          about='Selecione o modelo'
          label='Modelo'
          register={register('model')}
          error={errors.model}
        />
        <div className='carInfos__otherInfos'>
          <DefaultFormInput
            label='Ano'
            placeholder='Ano'
            value={selectedCar?.year || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Combustível'
            placeholder='Combustível'
            value={selectedCar?.fuel || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Quilometragem'
            placeholder='Quilometragem'
            {...register('kilometrage')}
            error={errors.kilometrage}
          />
          <DefaultFormInput
            label='Cor'
            placeholder='Cor'
            {...register('color')}
            error={errors.color}
          />
          <DefaultFormInput
            label='Tabela FIP'
            placeholder='Tabela FIP'
            value={selectedCar?.value || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Preço'
            placeholder='Preço'
            {...register('price')}
            error={errors.price}
          />
        </div>
        <DefaultTextArea
          name={'description'}
          register={register('description')}
          error={errors.description}
        />
        <div className='imagesLinkInputs'>
          <DefaultFormInput
            label='Imagem de Capa'
            placeholder='https://...'
            {...register('coverImage')}
            error={errors.coverImage}
          />
          <DefaultFormInput
            label='Imagem 01 da Galeria'
            placeholder='https://...'
            {...register('image01')}
            error={errors.image01}
          />
          <DefaultFormInput
            label='Imagem 02 da Galeria'
            placeholder='https://...'
            {...register('image02')}
            error={errors.image02}
          />

          <NewInputImg />
        </div>

        <div className='carButtons'>
          <div className='carButtons__addImg'>
            <ButtonOpacity
              onClick={() => {
                addMoreImages();
              }}
              className='text-style-text-body-2-500'
              type='button'
              disabled={extraImages.length === 0 ? true : false}
            >
              Adicionar mais imagens
            </ButtonOpacity>
          </div>
          <div className='carButtons__deleteSave'>
            <NegativeButton
              onClick={handleCloseModal}
              className='buttons-style-button-size-big'
            >
              Cancelar
            </NegativeButton>
            <ButtonDisabled className='buttons-style-button-size-big'>
              Salvar
            </ButtonDisabled>
          </div>
        </div>
      </form>
    </NewCarContainer>
  );
};

export default CreateNewCar;
