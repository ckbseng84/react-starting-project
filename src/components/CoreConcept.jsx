//sequence of props is not important, but parameters are
export function CoreConcept({title, image,description}){
    return (
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }