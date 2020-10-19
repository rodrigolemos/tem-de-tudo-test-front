import React, { useState, useEffect } from 'react';

import CustomChart from '../../components/CustomChart';
import DataNotFound from '../../components/DataNotFound';
import Loading from '../../components/Loading';

import { api } from '../../services/api';
import calcArrayTotal from '../../utils/calcArrayTotal';

const ProfitReport = ({ starts, finishes }) => {
  
  const [loading, setLoading] = useState(false);
  const [profit, setProfit] = useState([]);

  useEffect(() => {

    if (starts && finishes) {
      fetchProfit(starts, finishes);
    }

  }, [starts, finishes]);

  const fetchProfit = async (starts, finishes) => {

    setLoading(true);

    try {

      const response = await api.get(`/sales/profit?starts=${starts}&finishes=${finishes}`);

      if (response.status === 200) {
        setProfit(response.data);
      }

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        profit.length > 0 ? (
          <>
            <h2>Lucro {calcArrayTotal(profit)}</h2>
            <CustomChart title="Lucro por dia" info={profit} />
          </>
        ) : (
          <DataNotFound>
            <h2>Nenhuma venda encontrada.</h2>
          </DataNotFound>
        )
      )}
    </>
  )
}

export default ProfitReport;