import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductAdmin = () => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://jonasv2711products.azurewebsites.net/products')
            .then(res => {
                // console.log(res);
                setProducts(res.data)
            });
    }

    const handleDelete = (id) => {
        if (window.confirm('Sure you wanna delete this producy?')) {
            axios.delete('https://jonasv2711products.azurewebsites.net/products/' + id)
                .then(res => {
                    console.log(res);
                    fetchData();
                });
        }
    }

    const productList = products.length ? (
        products.map(products => {
            return (

                <tr key={products._id}>
                    <th scope="row">{products._id}</th>
                    <td>{products.title}</td>
                    <td>{products.category.categoryName}</td>
                    <td>{products.productText}</td>
                    <td>{`€ ${products.price}`}</td>
                    <td>{products.products}</td>
                    <td><Link to={`/edit/${products._id}`}><i className="fas fa-pencil-alt"></i></Link></td>
                    <td><i onClick={() => handleDelete(products._id)} className="fas fa-minus-circle"></i></td>

                </tr>

            )
        })
    ) : (
            <div className="text-center">No Products to show, must be a error</div>
        );



    return (
        <div id="admin" className="container">

            <h1 className="text-center mt-5 mb-5">ADMIN</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th className="heading" scope="col">ID</th>
                        <th className="heading" scope="col">Title</th>
                        <th className="heading" scope="col">Category</th>
                        <th className="heading" scope="col">Product text</th>
                        <th className="heading" scope="col">Price</th>
                        <th className="heading" scope="col">Edit</th>
                        <th className="heading" scope="col">Delete</th>
                    </tr>

                    <tr>

                        <th className="heading" scope="col"> <Link to="/add"><i className="fas fa-plus-circle"></i>   </Link>Add new product</th>
                    </tr>

                    <tr>
                        <th className="heading" scope="col"> <Link to="/addcategory"><i className="fas fa-plus-circle"></i>   </Link>Add new category</th>
                    </tr>


                </thead>

                <tbody>


                    {productList}
                </tbody>

            </table>
        </div>
    )
}

export default ProductAdmin;
