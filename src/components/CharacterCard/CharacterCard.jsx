import "./CharacterCard.css"

function CharacterCard({character}){
  return(
    <div className="card"> 
      <img className="card_img"  src={character.image} alt={character.name} />
      <h1 className="card-title">
        {character.name}
      </h1>
     <span className="card-subtitle">
      {character.ki}
     </span>
     <p className="card-text">
    {character.description}  
    </p>
    </div>
  )
}

export default CharacterCard
