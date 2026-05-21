import './App.css';

function Img_cabecalho(){
  return (
    <div className='cabecalho'>
    <img src= '/images/PlayStation_logo.svg-removebg-preview.png'
      alt='playstation'
      className='Logo'
      width={120}
      />
      <h1 className="Titulo">Playstation</h1>
      </div>
  )
}
function Apresentacao(){
  return <h2 className='Apresentacao'>Jogar Não Tem Limites</h2>
}
function Titulo_card1(){
  return (
  <>
  <h2 className='titulo-card essencial'>ESSENCIAL</h2>
  <h3>Jogos mensais, modo multijogador e muito mais</h3>
  </>
  )
}
function Card1_info(){
  return (
    <>
  <h4>R$43,90/mês</h4>
  <h4>✅ Jogos mensais</h4>
  <h4>✅ Modo multijogador online</h4>
  <h4>✅ Descontos exclusivos</h4>
  </>
  )
}
function Botao_card(){
  return <button className='botao-card'> Acicionar ao carrinho </button>
}
function Titulo_card2(){
  return (
    <>
  <h2 className='titulo-card extra'>EXTRA</h2>
  <h3>Descubra centenas de jogos</h3>
  </>
  )
}
function Card2_info(){
  return (
    <>
  <h4>R$65,90/mês</h4>
  <h4>✅ Jogos mensais</h4>
  <h4>✅ Modo multijogador online</h4>
  <h4>✅ Descontos exclusivos</h4>
  <h4>✅ Catálogo de jogos</h4>
  <h4>✅ Ubisoft+ Classics</h4>
  </>
)
}
function Titulo_card3(){
  return (
    <>
  <h2 className='titulo-card deluxe'>DELUXE</h2> 
  <h2>Experimente todos os benefícios</h2>
  </>
  )
}
function Card3_info(){
  return (

  <>
  <h4>R$76,90/mês</h4>
  <h4>✅ Jogos mensais</h4>
  <h4>✅ Modo multijogador online</h4>
  <h4>✅ Descontos exclusivos</h4>
  <h4>✅ Catálogo de jogos</h4>
  <h4>✅ Ubisoft+ Classics</h4>
  <h4>✅ Catálogo de clássicos</h4>
  <h4>✅ Experimentação de jogos</h4>
</>
)
}

function App(){
  return (
    <>
    <div className='Titulo_card'>
    <Img_cabecalho />
    <Apresentacao />
    </div>

    <div className='card1'>
      <Titulo_card1 />
      <Card1_info />
      <Botao_card />
    </div>
    <div className='card2'>
      <Titulo_card2 />
      <Card2_info />
      <Botao_card />
    </div>
    <div className='card3'>
      <Titulo_card3 />
      <Card3_info />
      <Botao_card />
    </div>
    </>
  );
}

export default App;