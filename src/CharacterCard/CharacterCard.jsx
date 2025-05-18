function CharacterCard({character}){
  return(
    <div className="card"> 
      <img className="card-img-top"  src={character.image} alt={character.name} />
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
