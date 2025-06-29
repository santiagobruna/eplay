import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './style'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </HashRouter>
    </Provider>
  )
}

export default App
