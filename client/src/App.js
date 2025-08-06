import React, {useState} from 'react';

import Header from './Header'

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter +1)
  }

  return (
    // <Header title="Client REST Udemy"/>
    // Abaixo outra forma de passar propriedade, diferente da acima. São duas formas

    //<Header>Client REST Udemy by Alex</Header>

    <div>
      <Header>
        Counter: {counter}
      </Header>
      <button onClick={increment}>Add</button>
    </div>

  );
}
