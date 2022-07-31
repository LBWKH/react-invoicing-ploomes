import React from 'react'
import { AppContainer } from './components/Container'
import { ClientData } from './components/DataForm'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <ClientData />
    </AppContainer>
  )
}

export default App
