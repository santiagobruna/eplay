import Button from '../../components/Button'
import Card from '../../components/Card'
import { Group, Row } from './style'

const Checkout = () => {
  return (
    <div className="container">
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <Group>
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" id="fullName" />
            </Group>
            <Group>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </Group>
            <Group>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </Group>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <Group>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" />
            </Group>
            <Group>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </Group>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>
            Ao optar por essa forma de pagamento, é importante lembrar que a
            confirmação pode levar até 3 dias úteis, devido aos prazos
            estabelecidos pelas instituições financeiras. Portanto, a liberação
            do código de ativação do jogo adquirido ocorrerá somente após a
            aprovação do pagamento do boleto.
          </p>
        </div>
      </Card>
      <Button title="Clique aqui para finalizar a compra" type="button">
        Finalizar compra
      </Button>
    </div>
  )
}
export default Checkout
