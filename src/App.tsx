import React, { useCallback, useState } from 'react';
import InputMask from './componentes/Input/index'
import './style.css'


function formatPhoneNumber(phoneNumber: string) {
  let formattedNumber = phoneNumber.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos
  let formattedOutput = '';

  // Verifica se o número possui mais de 11 caracteres e adiciona uma vírgula se necessário
  if (formattedNumber.length > 11) {
    formattedOutput += formattedNumber.slice(0, -11) + ', ';
    formattedNumber = formattedNumber.slice(-11);
  }

  // Formata o número restante
  const countryCode = formattedNumber.slice(0, 2);
  const areaCode = formattedNumber.slice(2, 4);
  const firstPart = formattedNumber.slice(4, 9);
  const secondPart = formattedNumber.slice(9);

  formattedOutput += `(${countryCode}) ${areaCode}-${firstPart}`;
  if (secondPart) {
    formattedOutput += `-${secondPart}`;
  }

  return formattedOutput;
}

const data2 = ['(92) 99493-5577', '(92) 99493-5577', '(92) 99493-5577', '(92) 99493-5577']

const App: React.FC = () => {
  const [subscribe, setSubscribe] = useState<string[]>([]);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.value.length % 11 ===0){
      setSubscribe({
        ...subscribe,
        [e.currentTarget.name]: String(e.currentTarget.value)
      })
    }
  }, [subscribe])

  return (
    <div>
      <InputMask typeMask='phone' placeholder="99999-999" name='cep' onChange={handleChange} />
      <button onClick={() => { console.log(subscribe) }}>Salvar</button>
    </div>
  )
}

export default App;
