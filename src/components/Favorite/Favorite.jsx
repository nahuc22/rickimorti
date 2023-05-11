import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { removeFav } from "../../Redux/Action/Actions";


function Favorites({myFavorites, onClose, removeFav}) {
    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
    return (
        <div>
            {myFavorites &&
                myFavorites.map((element, index) => {
                    return (
                        <Card
                            key={index}
                            id={element.id}
                            name={element.name}
                            origin={element.origin.name}
                            image={element.image}
                            onClose={() => closeFavorite(element.id)}
                            removeFav={removeFav}
                            myFavorites={myFavorites}
                            >
                        </Card>
                    )
                }
                )}
        </div>
    )
}
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}
function mapDispatch(dispatch){
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
}
export default connect(mapStateToProps, mapDispatch )(Favorites);