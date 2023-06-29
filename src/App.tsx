import React, { useCallback, useState } from 'react';
import InputMask from './componentes/Input/index'
import './style.css'

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
