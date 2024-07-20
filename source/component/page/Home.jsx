import React from "react";
import Category from "../../data/Category";
import Items from "../../data/Items";
import { Link } from "react-router-dom";

function Home() {
    // console.log(Category)
    console.log(Items)
    return (
        <>
            <section>
                <div className='container'>
                    <h3 className='text-center  text-secondary'>Our Product</h3>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='bg-dark text-white fs-3 text-centre'>CATEGORIES</div>

                            {Category.map((c) =>
                            
                                // <div className="py-1 px-2"><ul><li><a href={c} >{c}</a></li></ul></div>

                                <div className="py-1 px-2"><ul><li><Link to={`/cat_details/${c}`}  >{c}</Link></li></ul></div>
                            )}

                            {/* <div><ul><li><a href="#" >Health & Beauty</a></li></ul></div>
                <div><ul><li><a href="#" >Women Fashion</a></li></ul></div>
                <div><ul><li><a href="#" >Women Fashion</a></li></ul></div>
                <div><ul><li><a href="#" >Women Fashion</a></li></ul></div>
                <div><ul><li><a href="#" >Women Fashion</a></li></ul></div>
                <div><ul><li><a href="#" >Women Fashion</a></li></ul></div> */}
                        </div>

                        {Items.map((i) =>
                            <Link to={`/item_details/${i.id}`} className="col-2 d-flex ">
                              
                                <div className="card" style={{ width: '18rem' }}>
                                    {<img src= {i.image} className="card-img-top" alt="..." />}
                                    <div className="card-body">
                                        <p className="card-text">{i.description}</p>
                                    </div>
                                </div>
                              
                            </Link>
                        )}



                        {/* <div className="col-2 d-flex ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Book aaaaaaaaaasssssssssssssssssssssssssssss</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Book aaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Book</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Book</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Book</p>
                            </div>
                        </div>
                    </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home