import Cabecalho from './components/cabecalho.jsx'

export default function App() {
    const nome = 'Karlos'
    const texto = 'Cabeçalho Show!'
    return (
        <>
            <Cabecalho texto={texto} />
            <h1>Primeiro Projeto</h1>
            <p>Olá, {nome}!</p>
        </>
    )
}   