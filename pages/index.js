import { useState } from 'react'

function Home() {
    return (
        <div>
            <h1>Testando API</h1>
            <Contador />
            <div><br/>Felipe Ferreira Domingues</div>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionaContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    )
}

export default Home