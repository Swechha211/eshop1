import React from 'react'
import { useParams } from 'react-router-dom'
import Items from '../../data/Items'

function Item_details() {
    let {item_id} = useParams()

    let find_item = Items.find((fi) => item_id == fi.id )
    console.log(find_item)
  return (
    <>
    <div className='container'>
        {/* <h1>Product details : {item_id}</h1> */}
        <h1>Product details </h1>
        <div className='row'>
            <div className='col-4'>
                <img src={find_item.image} alt="" width='400px' />
            </div>
            {/* <div className='col-2'> */}
                <div className='col'>
                    <h4> Title: {find_item.item_name} </h4>
                    <h4> Description: {find_item.description}</h4>
                    <h4> Category: {find_item.category} </h4>
                    <h4> Price: {find_item.price}</h4>

                </div>
            {/* </div> */}

        </div>

    </div>
    </>
  )
}

export default Item_details