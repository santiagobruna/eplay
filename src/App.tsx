import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='container'>
        <Header />
      </div>
      <Banner/>
    </>
  )
}

export default App
