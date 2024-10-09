import './App.css'
import { useState } from 'react'
import Modal from './components/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  

  return (
    <div className='App'>
      Front Beginners - Modal
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
        
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      <div>
        <h1>Atenção! Nova forma de envio de boleto online</h1>
      </div>

      <div>
        <span>
        A partir das emissões com vencimento em Dez/24, os boletos digitais não serão mais enviados pelo e-mail 
        </span>
      </div>

      <strong>
        <span>
        nao-responda@selladm.com.br.
        </span>
      </strong>
      
      <span>
        Os boletos digitais serão enviados exclusivamento pelo e-mail
      </span> 
      
      <strong>
        <span>
          14804150sendmail@webware.com.br
        </span>
      </strong> 

      <span>
      e pelos meios digitais em anexo. Para garantir o recebimento, mantenha seu
      </span>

      <span>cadastro atualizado no Portal Sell.</span>
       
      </Modal>
      
    </div>
  )
}

export default App
