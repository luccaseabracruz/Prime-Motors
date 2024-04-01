/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, createContext, useEffect, useState } from 'react';
import { ICar, ICarUser, IDefaultProviderProps } from '../interfaces';
import { api, apiKenzieCars } from '../services/api';
import { ICreateCar } from '../components/Modal/CreateNewCar/createCar.schema';
import { AxiosResponse } from 'axios';
import { ICarByBrandFromKenzieAPI } from '../interfaces/cars.interfaces';
import { useModal } from '../hooks';
import { toast } from 'react-toastify';

interface ICarContextValues {
  allCars: ICar[];
  carBrands: string[];
  carModels: string[];
  carColors: string[];
  carYears: string[];
  carFuelTypes: string[];
  carMinKm: number;
  carMaxKm: number;
  carMinPrice: number;
  carMaxPrice: number;
  setCarMinPrice: Dispatch<React.SetStateAction<number>>;
  setCarMaxPrice: Dispatch<React.SetStateAction<number>>;
  setCarMinKm: Dispatch<React.SetStateAction<number>>;
  setCarMaxKm: Dispatch<React.SetStateAction<number>>;
  setfilterCar: Dispatch<React.SetStateAction<string>>;
  filterCar: string;
  filteredCars: ICar[];
  setFilteredCars: Dispatch<React.SetStateAction<ICar[]>>;
  isFilterActive: boolean;
  setIsFilterActive: Dispatch<React.SetStateAction<boolean>>;
  handleCreateCar: (newCarData: ICreateCar) => Promise<void>;
  setModelsByBrandsFromApi: Dispatch<React.SetStateAction<Array<string>>>;
  modelsByBrandsFromApi: string[];
  getModelsCarsByBrandFromKenzieCars: (brand: string) => Promise<void>;
  getAllCarsBrandsFromKenzieCars: () => Promise<void>;
  allBrandsFromApi: string[];
  setAllBrandsFromApi: Dispatch<React.SetStateAction<string[]>>;
  setCarsByBrandFromApi: Dispatch<
    React.SetStateAction<ICarByBrandFromKenzieAPI[]>
  >;
  carsByBrandFromApi: ICarByBrandFromKenzieAPI[];
  selectedCar: ICar;
  setSelectedCar: Dispatch<React.SetStateAction<ICar>>;
  selectedSeller: ICarUser;
  setSelectedSeller: Dispatch<React.SetStateAction<ICarUser>>;
  findCarToEdit: (id: number) => void;
  carToEdit: ICar;
  selectedInputCar: ICarByBrandFromKenzieAPI | undefined;
  setSelectedInputCar: Dispatch<
    React.SetStateAction<ICarByBrandFromKenzieAPI | undefined>
  >;
  objectSelectedInputCar: (model: string) => void;
  handleUpdateCar: (newCarData: ICreateCar) => Promise<void>;
  handleDeleteCar: () => Promise<void>;
  handleSetPictureNull: (imageToNull: { [key: string]: null }) => Promise<void>;
  selectedCarPhotoUrl: string;
  setSelectedCarPhotoUrl: Dispatch<React.SetStateAction<string>>;
  carPerPage: ICar[];
  setCarPerPage: Dispatch<React.SetStateAction<ICar[]>>;
  sellersCars: ICar[];
  setSellersCars: Dispatch<React.SetStateAction<ICar[]>>;
}

export const CarContext = createContext({} as ICarContextValues);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [allCars, setAllCars] = useState([] as ICar[]);
  const [carBrands, setCarBrands] = useState([] as string[]);
  const [carModels, setCarModels] = useState([] as string[]);
  const [carColors, setCarColors] = useState([] as string[]);
  const [carYears, setCarYears] = useState([] as string[]);
  const [carFuelTypes, setCarFuelTypes] = useState([] as string[]);
  const [carMinKm, setCarMinKm] = useState(0);
  const [carMaxKm, setCarMaxKm] = useState(Math.pow(10, 10));
  const [carMinPrice, setCarMinPrice] = useState(0);
  const [carMaxPrice, setCarMaxPrice] = useState(Math.pow(10, 10));
  const [filteredCars, setFilteredCars] = useState([] as ICar[]);
  const [filterCar, setfilterCar] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [selectedCar, setSelectedCar] = useState(selectedCarMock);
  const [selectedSeller, setSelectedSeller] = useState(selectedSellerMock);
  const [carToEdit, setCarToEdit] = useState(({} as ICar) || undefined);
  const [selectedInputCar, setSelectedInputCar] = useState(
    {} as ICarByBrandFromKenzieAPI | undefined
  );
  const [selectedCarPhotoUrl, setSelectedCarPhotoUrl] = useState('');
  const [carPerPage, setCarPerPage] = useState([] as ICar[]);

  const { handleShowModal } = useModal();

  const [allBrandsFromApi, setAllBrandsFromApi] = useState([] as Array<string>);
  const [modelsByBrandsFromApi, setModelsByBrandsFromApi] = useState(
    [] as Array<string>
  );
  const [carsByBrandFromApi, setCarsByBrandFromApi] = useState(
    [] as Array<ICarByBrandFromKenzieAPI>
  );

  const [sellersCars, setSellersCars] = useState([] as ICar[]);

  const findValues = (attrName: string): string[] => {
    let values: string[] = [];
    if (isFilterActive) {
      values = filteredCars.map((car) => String(car[attrName]));
    } else {
      values = allCars.map((car) => String(car[attrName]));
    }
    if (attrName === 'model') {
      values = values.map((value) => value.split(' ')[0]);
    }
    const uniqueValues = [...new Set(values)];
    uniqueValues.sort();

    return uniqueValues;
  };

  const getCars = async () => {
    try {
      const cars = await api.get<ICar[]>('/cars');
      setAllCars(cars.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    const filtered = allCars.filter(
      (car) =>
        Number(car.price) >= carMinPrice &&
        Number(car.price) <= carMaxPrice &&
        car.kilometrage >= carMinKm &&
        car.kilometrage <= carMaxKm &&
        (car.brand.includes(filterCar) ||
          car.model.includes(filterCar) ||
          car.color.includes(filterCar) ||
          car.fuel_type.includes(filterCar) ||
          car.year.toString().includes(filterCar))
    );
    setFilteredCars(filtered);
  }, [filterCar, carMinKm, carMaxKm, carMinPrice, carMaxPrice]);

  useEffect(() => {
    setCarBrands(findValues('brand'));
    setCarModels(findValues('model'));
    setCarColors(findValues('color'));
    setCarYears(findValues('year'));
    setCarFuelTypes(findValues('fuel_type'));
  }, [allCars, filteredCars]);

  const token = localStorage.getItem('@TOKEN') || null;

  const headersAuth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const handleCreateCar = async (newCarData: ICreateCar) => {
    try {
      const newCarResponse: AxiosResponse = await api.post<ICreateCar>(
        '/cars',
        newCarData,
        headersAuth
      );

      if (newCarResponse.status === 201) {
        getCars();
        handleShowModal('createNewCarResponse');
      }
    } catch (error) {
      console.log(error);
      toast.error('Ops, algo deu errado...');
    }
  };

  const getAllCarsBrandsFromKenzieCars = async () => {
    const allCars = await apiKenzieCars.get<AxiosResponse<string[]>>(`/cars`);
    const allBrands: Array<string> = Object.keys(allCars.data);

    setAllBrandsFromApi(allBrands);
  };

  const getModelsCarsByBrandFromKenzieCars = async (brand: string) => {
    try {
      const carsByBrand: AxiosResponse<Array<ICarByBrandFromKenzieAPI>> =
        await apiKenzieCars.get<Array<ICarByBrandFromKenzieAPI>>(
          `/cars?brand=${brand}`
        );

      const carsModels = carsByBrand.data.map((car) => car.name);
      setCarsByBrandFromApi(carsByBrand.data);
      setModelsByBrandsFromApi(carsModels);
    } catch (error) {
      console.log(error);
    }
  };

  const objectSelectedInputCar = (model: string) => {
    const car = carsByBrandFromApi.find((car) => car.name === model);

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

    setSelectedInputCar(car);
  };

  const findCarToEdit = async (id: number) => {
    try {
      const carFound: ICar | undefined = allCars.find((car) => car.id === id);
      await getModelsCarsByBrandFromKenzieCars(carFound!.brand.toLowerCase());
      setCarToEdit(carFound!);
      handleShowModal('editCar');
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCar = async (newCarData: ICreateCar) => {
    try {
      const newCarResponse: AxiosResponse = await api.patch<ICreateCar>(
        `/cars/${carToEdit.id}`,
        newCarData,
        headersAuth
      );

      if (newCarResponse.status === 200) {
        toast.success('Seu anúncio foi atualizado!');
        getCars();
      }
    } catch (error) {
      console.log(error);
      toast.error('Ops, algo deu errado...');
    }
  };

  const handleDeleteCar = async () => {
    try {
      const deleteCarResponse: AxiosResponse = await api.delete(
        `/cars/${carToEdit.id}`,
        headersAuth
      );

      if (deleteCarResponse.status === 204) {
        toast.success('Anúncio Deletado');
        getCars();
      }
    } catch (error) {
      console.log(error);
      toast.error('Ops, algo deu errado...');
    }
  };

  const handleSetPictureNull = async (imageToNull: { [key: string]: null }) => {
    try {
      const setPictureNullResponse: AxiosResponse = await api.patch(
        `/pictures/${carToEdit.picture.id}`,
        imageToNull,
        headersAuth
      );

      if (setPictureNullResponse.status === 200) {
        findCarToEdit(carToEdit.id);
        toast.success('Você exclui a imagem');
      }
    } catch (error) {
      console.log(error);
      toast.error('Algo não saiu como esperado. A foto não foi deletada...');
    }
  };

  return (
    <CarContext.Provider
      value={{
        allCars,
        carBrands,
        carModels,
        carColors,
        carYears,
        carFuelTypes,
        carMinKm,
        carMaxKm,
        carMinPrice,
        carMaxPrice,
        filterCar,
        setfilterCar,
        filteredCars,
        setFilteredCars,
        isFilterActive,
        setIsFilterActive,
        setCarMaxKm,
        setCarMaxPrice,
        setCarMinKm,
        setCarMinPrice,
        handleCreateCar,
        modelsByBrandsFromApi,
        setModelsByBrandsFromApi,
        getModelsCarsByBrandFromKenzieCars,
        getAllCarsBrandsFromKenzieCars,
        allBrandsFromApi,
        setAllBrandsFromApi,
        carsByBrandFromApi,
        setCarsByBrandFromApi,
        selectedCar,
        setSelectedCar,
        selectedSeller,
        setSelectedSeller,
        findCarToEdit,
        carToEdit,
        selectedInputCar,
        setSelectedInputCar,
        objectSelectedInputCar,
        handleUpdateCar,
        handleDeleteCar,
        handleSetPictureNull,
        selectedCarPhotoUrl,
        setSelectedCarPhotoUrl,
        carPerPage,
        setCarPerPage,
        sellersCars,
        setSellersCars
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

const selectedSellerMock: ICarUser = {
  id: 0,
  description: '',
  email: '',
  full_name: '',
  phone_number: '',
  is_seller: true
};
const selectedCarMock: ICar = {
  id: 0,
  brand: '',
  model: '',
  description: '',
  color: '',
  year: 0,
  fuel_type: '',
  kilometrage: 0,
  price: '',
  published: false,
  good_deal: false,
  created_at: '',
  picture: {
    id: 0,
    coverImage: '',
    image01: '',
    image02: '',
    image03: '',
    image04: '',
    image05: '',
    image06: ''
  },
  user: selectedSellerMock
};
