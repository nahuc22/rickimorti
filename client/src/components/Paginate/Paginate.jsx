import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage , prevPage } from '../../Redux/Action/Actions';

export default function Paginate ({cantPages}) {
    const {numPage} = useSelector((state) => state)
    const dispatch = useDispatch();

    function next() {
        dispatch(nextPage())
    }

    function prev() {
        dispatch(prevPage())
    }

    return ( 
        <div>   
            { numPage > 1 ? (
                <div>
                    <button onClick={prev}>Prev</button>
                    <p>{numPage - 1}</p>
                </div>
            ): null}

            <h3>{numPage}</h3>
            {
                numPage < cantPages?
                <div></div>: null
            }

            <p>{numPage + 1}</p>
            <button onClick={next}>Next</button>
        </div>
    )
}