import React from 'react'
import Category from '../../data/Category'

function Cat_details() {
    let {cat_id} = useParams()

    let find_cat = Category.find((fi) => cat_id == fi.id )
    console.log(find_cat)
  return (
    <>
    <div className='container'>
        
        <h1>Category details </h1>
        <div className='row'>
            <div className='col-4'>
                <img src={find_cat.image} alt="" width='400px' />
            </div>
            {/* <div className='col-2'> */}
                {/* <div className='col'>
                    <h4> Title: {find_item.item_name} </h4>
                    <h4> Description: {find_item.description}</h4>
                    <h4> Category: {find_item.category} </h4>
                    <h4> Price: {find_item.price}</h4>

                </div> */}
            {/* </div> */}

        </div>

    </div>
    </>
  )
}

export default Cat_details