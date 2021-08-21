const Card = ({card, cards, setCards, index}) => {  
    return ( 
        <div className="container">
            <div className="card">
                <div className="title">{card.title} 
                <button onClick={()=>{
                    console.log(index);
                    const newCards = cards.filter((el,i)=> i!==index);
                    setCards(newCards);
                }}>Delete</button></div>
                
                <p>{card.para}</p>
            </div>
        </div>  
    );  
};

export default Card;