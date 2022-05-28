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
