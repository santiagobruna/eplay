import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './style'

import barCode from '../../assets/barcode.png'
import creditCard from '../../assets/credit-card.png'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { getTotalPrice } from '../../utils'
import {clear} from '../../store/reducers/cart'

type Installment = { 
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])
  const dispatch = useDispatch()
  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({ 
      fullName: Yup.string().min(5, 'O nome completo deve ter pelo menos 5 caracteres').required('Campo obrigatório'),
      email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      cpf: Yup.string().min(14, 'CPF deve ter 14 dígitos').max(14, 'CPF deve ter 14 dígitos').required('Campo obrigatório'),
      deliveryEmail: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string().oneOf([Yup.ref('deliveryEmail')], 'Os e-mails devem ser iguais').required('Campo obrigatório'),


      cardOwner: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cpfCardOwner: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardDisplayName: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardNumber: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      expiresMonth: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      expiresYear: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardCode: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      installments: Yup.number().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            ower: {
              document: values.cpfCardOwner,
              name: values.cardOwner,
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products:items.map((item) => ({
          id: item.id,
          price: item.prices.current as number,
        }))
      })
    }
  })
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }
  useEffect(() => {
      const calculateInstallments = (price: number) => {
        const installmentOptions: Installment[] = []
        for(let i = 1; i <= 6; i++) {
          const installmentAmount = price / i
          installmentOptions.push({
            quantity: i,
            amount: installmentAmount,
            formattedAmount: installmentAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          })
      }
      return installmentOptions
    }
    if(totalPrice > 0){
      setInstallments(calculateInstallments(totalPrice))
    }
  }, [totalPrice])
  useEffect(() => {
    if(isSuccess) {
      dispatch(clear())
    }
    if(isError) {
      alert('Ocorreu um erro ao finalizar a compra. Por favor, tente novamente.')
    }
  }, [isSuccess, isError, dispatch])
  if(items.length === 0 && !isSuccess) {
    return(
      <Navigate to="/" />
    )
  }
  return (
    <div className='container'>
      {isSuccess ?(
          <Card title="Muito obrigado">
        <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
                Número do pedido: {data?.orderId}  <br />
              Forma de pagamento: {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
            </p>
            <p className='margin-top'>
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação pode levar até 3 dias úteis. 
              Após a aprovação do pagamento, enviaremos um e-mail contendo o código de ativação do jogo.
            </p>
            <p className='margin-top'>
              Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação ocorrerá após a aprovação da transação pela operadora do cartão. Você receberá o código no e-mail cadastrado em nossa loja.
            </p>
            <p className='margin-top'>
              Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação.
              Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente.
            </p>
            <p className='margin-top'>
                Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
            </p>
         </>
          </Card>
      ): (
        <form onSubmit={form.handleSubmit}>
        <Card title="Dados de Cobrança">
          <>
            <S.Row>
              <S.Group>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
                
              </S.Group>
              <S.Group>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  className={checkInputHasError('email') ? 'error' : ''}
                />
              </S.Group>
              <S.Group>
                <label htmlFor="cpf">CPF</label>
                <InputMask
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  className={checkInputHasError('cpf') ? 'error' : ''}
                  mask="999.999.999-99"
                />
              </S.Group>
            </S.Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <S.Row>
              <S.Group>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  type="email"
                  id="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  className={checkInputHasError('deliveryEmail') ? 'error' : ''}
                />
                
              </S.Group>
              <S.Group>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  type="email"
                  id="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  className={checkInputHasError('confirmDeliveryEmail') ? 'error' : ''}
                />
                
              </S.Group>
            </S.Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <S.TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
              type='button'
              
            >
              <img src={barCode} alt="Boleto" />
              Boleto bancário
            </S.TabButton>
            <S.TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
              type='button'
            >
              <img src={creditCard} alt="Cartão de crédito" />
              Cartão de crédito
            </S.TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <S.Row>
                    <S.Group>
                      <label htmlFor="cardOwner">Nome do titular do cartão</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('cardOwner') ? 'error' : ''}
                      />
                
                    </S.Group>
                    <S.Group>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <InputMask
                        type="text"
                        id="cpfCardOwner"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('cpfCardOwner') ? 'error' : ''}
                        mask="999.999.999-99"
                      />
                      
                    </S.Group>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.Group>
                      <label htmlFor="cardDisplayName">Nome do cartão</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                      />
                      
                    </S.Group>
                    <S.Group>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('cardNumber') ? 'error' : ''}
                        mask='9999 9999 9999 9999'
                      />
                      
                    </S.Group>
                    <S.Group maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês de expiração</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('expiresMonth') ? 'error' : ''}
                        mask='99'
                      />
                    </S.Group>
                    <S.Group maxWidth="123px">
                      <label htmlFor="expiresYear">Ano de expiração</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('expiresYear') ? 'error' : ''}
                        mask='9999'
                      />
                    </S.Group>
                    <S.Group maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('cardCode') ? 'error' : ''}
                        mask='999'
                      />
                    </S.Group>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.Group maxWidth="150px">
                      <label htmlFor="installments">Parcelamentos</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                        className={checkInputHasError('installments') ? 'error' : ''}
                      >
                        {installments.map((installment) => (
                          <option value={installment.quantity} key={installment.quantity}>{installment.quantity}x de {installment.formattedAmount}</option>
                        ))}
                      </select>
                    </S.Group>
                  </S.Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que a
                  confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </>
        </Card>
        <Button title="Clique aqui para finalizar a compra" type="submit" onClick={form.handleSubmit} disabled={isLoading} >
          {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
        </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
