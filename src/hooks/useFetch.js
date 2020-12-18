import { useEffect, useState } from 'react';
import { getInfo } from '../helpers/getInfo';

export const useFetch = () => {

  const [stateInfo, setStateInfo] = useState({
    info: [],
    loading: true
  });

  	useEffect(() => {

      const fetch = async() => {
        const info = await getInfo();
        setStateInfo({
          info: info,
          loading: false
        })
      }
      fetch()
	}, []);

  return stateInfo;
}