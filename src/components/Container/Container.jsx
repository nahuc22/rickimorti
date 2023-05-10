import Card from "../Card/Card";

export default function Container(props) {
    const {characters} = props;
   return (
    <div>
        {
        characters.map(({name, species, gender ,image, index }) => {
            return <Card 
            key = {index}
            name = {name}
            species = {species}
            gender = {gender}
            image  = {image}
            onClose ={()=> window.alert("Emulamos que se cierra la card")}
            ></Card>
        })
        }
        </div>
    )
}