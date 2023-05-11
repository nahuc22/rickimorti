import Card from "../Card/Card";

export default function Container({characters, onClose}) {
   return (
    <div>
        {
        characters.map(({name, species, gender ,image, index, origin, id }) => {
            return <Card 
            key = {index}
            id = {id}
            name = {name}
            species = {species}
            gender = {gender}
            image  = {image}
            origin={origin.name}
            onClose ={onClose}
            ></Card>
        })
        }
        </div>
    )
}