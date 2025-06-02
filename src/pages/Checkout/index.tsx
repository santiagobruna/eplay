import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'
import { Group, Row, TabButton } from './style'

import boleto from '../../assets/barcode.png'
import cartao from '../../assets/credit-card.png'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation()
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
      installments: ''
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
      installments: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
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
          installments: 1,
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
              month: 1,
              year: 2025,
            },
          },
        },
        products: [
          {
            id: 1,
            price: 200
          }
        ]
      })
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if(isTouched && isInvalid) return message
    return ''
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
            <Row>
              <Group>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                />
                <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
              </Group>
              <Group>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                  
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>
              </Group>
              <Group>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                />
                <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </Group>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <Group>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  type="email"
                  id="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                />
                <small>{getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}</small>
              </Group>
              <Group>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  type="email"
                  id="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur= {form.handleBlur}
                />
                <small>{getErrorMessage('confirmDeliveryEmail', form.errors.confirmDeliveryEmail)}</small>
              </Group>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
              
            >
              <img src={boleto} alt="Boleto" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={cartao} alt="Cartão de crédito" />
              Cartão de crédito
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <Row>
                    <Group>
                      <label htmlFor="cardOwner">Nome do titular do cartão</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('cardOwner', form.errors.cardOwner)}</small>
                    </Group>
                    <Group>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                        type="text"
                        id="cpfCardOwner"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}</small>
                    </Group>
                  </Row>
                  <Row marginTop="24px">
                    <Group>
                      <label htmlFor="cardDisplayName">Nome do cartão</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}</small>
                    </Group>
                    <Group>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                    </Group>
                    <Group maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <input
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                    </Group>
                    <Group maxWidth="123px">
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                    </Group>
                    <Group maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      />
                      <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                    </Group>
                  </Row>
                  <Row marginTop="24px">
                    <Group maxWidth="150px">
                      <label htmlFor="installments">Parcelamentos</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur= {form.handleBlur}
                      >
                        <option value="">1x de R$ 200,00</option>
                        <option value="">2x de R$ 200,00</option>
                        <option value="">3x de R$ 200,00</option>
                      </select>
                      <small>{getErrorMessage('installments', form.errors.installments)}</small>
                    </Group>
                  </Row>
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
        <Button title="Clique aqui para finalizar a compra" type="button" onClick={form.handleSubmit} >
          Finalizar compra
        </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
