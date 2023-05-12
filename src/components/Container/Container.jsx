import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";


export default function Container({onClose}) {
    const {characters} = useSelector((state) => state)
    const {numPage}  = useSelector((state) => state)
    
        let desde = (numPage - 1) * 5;
        let hasta = numPage * 5;

    let viewCharacter = characters.slice(desde,hasta)

    let cantPages = Math.floor(characters?.length / 5);
   return (
    <div>
        {
         viewCharacter &&   
           viewCharacter.map(({name, species, gender ,image, index, origin, id }) => {
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
        <Paginate cantPages={cantPages}></Paginate>
        </div>
    )
}