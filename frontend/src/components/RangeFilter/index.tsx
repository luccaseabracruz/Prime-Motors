/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, useEffect, useRef } from 'react';
import { StyledRageFilter } from './style';
import { toast } from 'react-toastify';

interface IRangeFilter {
  title: string;
  stateMinValue: number;
  stateMaxValue: number;
  isFilterActive: boolean;
  setStateMinValue: React.Dispatch<React.SetStateAction<number>>;
  setStateMaxValue: React.Dispatch<React.SetStateAction<number>>;
  setIsFilterActive: Dispatch<React.SetStateAction<boolean>>;
}

const RangeFilter = ({
  title,
  setStateMinValue,
  setStateMaxValue,
  setIsFilterActive,
  stateMinValue,
  stateMaxValue,
  isFilterActive
}: IRangeFilter) => {
  const minValueInput = useRef<HTMLInputElement>(null);
  const maxValueInput = useRef<HTMLInputElement>(null);
  const fixedStateMinValue: string = String(stateMinValue);
  const fixedStateMaxValue: string = String(stateMaxValue);

  useEffect(() => {
    if (!isFilterActive) {
      minValueInput.current!.value = '';
      maxValueInput.current!.value = '';
    }
  }, [isFilterActive]);

  useEffect(() => {
    if (stateMinValue > stateMaxValue) {
      setStateMinValue(Number(fixedStateMinValue));
      setStateMaxValue(Number(fixedStateMaxValue));
      minValueInput.current!.value = '';
      maxValueInput.current!.value = '';
    }
  }, [stateMinValue, stateMaxValue]);

  const handleOnBlurMin = (newValue: string) => {
    console.log('min on blur');
    if (newValue === String(stateMinValue)) {
      return;
    } else if (newValue.length == 0) {
      setStateMinValue(0);
      minValueInput.current!.value = String('');
      return;
    }

    if (Number(newValue) < stateMaxValue) {
      setStateMinValue(Number(newValue));
      setIsFilterActive(true);
    } else {
      minValueInput.current!.value = String('');
      setStateMinValue(0);
      toast.warning('O valor mínimo deve ser menor que o valor máximo.');
    }
    console.log(`min: ${stateMinValue} | max: ${stateMaxValue}`);
  };

  const handleOnBlurMax = (newValue: string) => {
    console.log('max on blur');

    if (Number(newValue) === stateMaxValue) {
      return;
    } else if (newValue.length === 0) {
      setStateMaxValue(Math.pow(10, 10));
      maxValueInput.current!.value = String('');
      return;
    }

    if (Number(newValue) > stateMinValue) {
      setStateMaxValue(Number(newValue));
      setIsFilterActive(true);
    } else {
      maxValueInput.current!.value = String('');
      setStateMaxValue(Math.pow(10, 10));
      toast.warning('O valor máximo deve ser maior que o valor mínimo.');
    }
    console.log(`min: ${stateMinValue} | max: ${stateMaxValue}`);
  };

  // const handleOnBlur = (
  //   setState: React.Dispatch<React.SetStateAction<number>>,
  //   newStateValue: string,
  //   previousStateValue: number,
  //   isMinOrMax: 'min' | 'max'
  // ) => {
  //   if (isMinOrMax === 'min') {
  //     if (Number(newStateValue) <= stateMaxValue) {
  //       setState(
  //         newStateValue.length > 0
  //           ? parseInt(newStateValue)
  //           : Number(fixedStateMinValue)
  //       );
  //     } else {
  //       minValueInput.current!.value = String(previousStateValue);
  //       toast.warning('O valor mínimo não pode ser maior que o valor máximo');
  //     }
  //   } else if (isMinOrMax === 'max') {
  //     if (Number(newStateValue) >= stateMinValue) {
  //       setState(
  //         newStateValue.length > 0
  //           ? parseInt(newStateValue)
  //           : Number(fixedStateMinValue)
  //       );
  //     } else {
  //       minValueInput.current!.value = String(previousStateValue);
  //       toast.warning('O valor mínimo não pode ser maior que o valor máximo');
  //     }
  //   }

  //   if (
  //     newStateValue.length > 1 &&
  //     parseInt(newStateValue) != previousStateValue
  //   ) {
  //     setIsFilterActive(true);
  //   }
  // };

  const validateNumberInput = (input: string): string => {
    const onlyNumbersRegex = /^[0-9]+$/;
    let response = '';
    if (!onlyNumbersRegex.test(input)) {
      response = input.replace(/[^0-9]+$/, '');
    } else {
      response = input;
    }
    return response;
  };
  return (
    <StyledRageFilter>
      <h2 className='title'>{title}</h2>
      <div className='valuesContainer'>
        <div className='value'>
          <div className='inputContainer'>
            {title === 'Preço' && <span>R$</span>}
            <input
              ref={minValueInput}
              type='text'
              className='minValueInput'
              //   defaultValue={stateMinValue}
              maxLength={7}
              placeholder='Min.'
              onChange={(e) => {
                e.target.value = validateNumberInput(e.target.value);
              }}
              onBlur={(e) => {
                handleOnBlurMin(e.target.value);
              }}
            />
            {title === 'Quilometros Rodados' && <span>Km</span>}
          </div>
        </div>
        <span>-</span>
        <div className='value'>
          <div className='inputContainer'>
            {title === 'Preço' && <span>R$</span>}
            <input
              ref={maxValueInput}
              type='text'
              className='minValueInput'
              //   defaultValue={stateMaxValue}
              maxLength={7}
              placeholder='Max.'
              onChange={(e) => {
                e.target.value = validateNumberInput(e.target.value);
              }}
              onBlur={(e) => {
                handleOnBlurMax(e.target.value);
              }}
            />
            {title === 'Quilometros Rodados' && <span>Km</span>}
          </div>
        </div>
      </div>
    </StyledRageFilter>
  );
};

export default RangeFilter;
