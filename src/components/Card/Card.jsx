export default function Card({name,image}) {
    return (
       <div>
          {/* <button onClick={}>X</button> */}
          <h2>{name}</h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <img src={image} alt='imagen' />
       </div>
    );
 }