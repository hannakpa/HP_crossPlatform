//Este componente recibe através de propiedades la información del usuario autenticado, recibida en el componente principal, App. El componente trata los datos del array e imprime a cada uno en una carta.

function TransCards({ info }) {
  let showCards = info.map((card, index) => {
    return (
      <div key={index} className="card-box">
        <p className="card-title">Transactions</p>
        <p className="indice-text">{card.numTrans}</p>
        <p className="desc-text"> {card.moment}</p>
      </div>
    );
  });

  return <>{showCards}</>;
}

export default TransCards;
