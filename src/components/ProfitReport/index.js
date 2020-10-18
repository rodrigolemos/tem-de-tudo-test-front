import React, { useState, useEffect } from 'react';

import Loading from '../../components/Loading';

import { api } from '../../services/api';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

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
            <h2>Vendas no período</h2>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Total Vendido</th>
                </tr>
              </thead>
              <tbody>
                {profit.map((profit, index) => (
                  <tr key={index}>
                    <td className="center">
                      {formatDate(profit.date)}
                    </td>
                    <td className="center">
                      {formatValue(profit.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h2>Nenhuma venda encontrada.</h2>
        )
      )}
    </>
  )
}

export default ProfitReport;