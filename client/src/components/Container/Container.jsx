import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";

export default function Container({onClose}) {
    // const dispatch = useDispatch()
    // useEffect(() => {   
    //     dispatch(resetCharacter())
    // }, [])

    const {characters} = useSelector((state) => state)
    const {numPage}  = useSelector((state) => state)
    
        let desde = (numPage - 1) * 5;
        let hasta = numPage * 5;

    let viewCharacter = characters?.slice(desde,hasta)

    let cantPages = Math.floor(characters.length / 5);
   return (
    <div>
        {
         viewCharacter &&   
           viewCharacter.map((element, index) => {
            return <Card 
            key = {index}
            id = {element.id}
            name = {element.name} 
            species = {element.species}
            gender = {element.gender}
            image  = {element.image}
            origin={element.origin.name}
            onClose ={onClose}
            ></Card>
        })
        }
        <Paginate cantPages={cantPages}></Paginate>
        </div>
    )
}