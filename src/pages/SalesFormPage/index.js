import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import SidePanel from '../../components/SidePanel';
import UserPanel from '../../components/UserPanel';
import Main from '../../components/Main';
import SelectAPI from '../../components/SelectAPI';

import { api } from '../../services/api';

const SalesFormPage = () => {

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const validateForm = async (sale) => {

    const schema = yup.object().shape({
      order: yup.number().positive().integer().required(),
      customer: yup.number().positive().integer().required(),
      seller: yup.number().positive().integer().required(),
      product_id: yup.number().positive().integer().required(),
      quantity: yup.number().positive().integer().required(),
      sale_price: yup.number().positive().required()
    });

    schema.validate(sale).then(async () => {

      await submitForm(sale);

    }).catch(err => {

      alert('Preencha todos os campos corretamente.');
      console.log(err);

    });

  }

  const submitForm = async (sale) => {

    try {

      const response = await api.post('/sales/create', sale);

      if (response.status === 200) {

        history.push('/');

      } else {

        alert('Não foi possível adicionar a venda. Tente novamente mais tarde.');

      }

    } catch (err) {

      alert('Não foi possível adicionar a venda. Tente novamente mais tarde.');

    }

  }

  return (
    <div className="global-container">
      <SidePanel>
        <UserPanel />
      </SidePanel>
      <Main>
        <div className="content-title">
          <h1>Adicionar Venda (experimental)</h1>
          <Link to="/">Voltar</Link>
        </div>
        <div className="form-wrapper">
          <h2>Informações da Venda</h2>
          <form onSubmit={handleSubmit(validateForm)}>
            <input ref={register} type="text" name="order" placeholder="Número do pedido" />
            <SelectAPI forwardRef={register} type="text" apiName="partners" name="customer" filterType="customer" placeholder="Cliente" />
            <SelectAPI forwardRef={register} type="text" apiName="partners" name="seller" filterType="seller" placeholder="Vendedor" />

            <h3>Produto 1</h3>
            <SelectAPI forwardRef={register} type="text" apiName="products" name="product" placeholder="Produto" />
            <input ref={register} type="text" name="quantity" placeholder="Quantidade" />
            <input ref={register} type="text" name="sale_price" placeholder="Valor unitário" />

            <h3>Produto 2</h3>
            <SelectAPI forwardRef={register} type="text" apiName="products" name="product_2" placeholder="Produto" />
            <input type="text" name="quantity_2" placeholder="Quantidade" />
            <input type="text" name="sale_price_2" placeholder="Valor unitário" />
            <button>Adicionar</button>
          </form>
        </div>
      </Main>
    </div>
  )
};

export default SalesFormPage;