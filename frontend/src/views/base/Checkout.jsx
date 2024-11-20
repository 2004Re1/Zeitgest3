import React, { useState, useEffect, useContext} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import CartId from "../plugin/CartId";
import { userId } from '../../utils/constants';
import apiInstance from "../../utils/axios";
import { CartContext } from '../plugin/Context';
import Toast from '../plugin/Toast';


function Checkout() {
    const [order, setOrder] = useState([]);

    const param = useParams();

    const fetchOrder = async () => {
        try {
          apiInstance.get(`order/checkout/${param.order_oid}/`).then((res) => {
            setOrder(res.data);
          });
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <>
            <BaseHeader />

            <section className="py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-light p-4 text-center rounded-3">
                                <h1 className="m-0">Checkout</h1>
                                {/* Breadcrumb */}
                                <div className="d-flex justify-content-center">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dots mb-0">
                                            <li className="breadcrumb-item">
                                                <a href="#" className='text-decoration-none text-dark'>Home</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="#" className='text-decoration-none text-dark'>Courses</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="#" className='text-decoration-none text-dark'>Cart</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Checkout
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5">
                <div className="container">
                    <div className="row g-4 g-sm-5">
                        <div className="col-xl-8 mb-4 mb-sm-0">
                            <div className="alert alert-warning alert-dismissible d-flex justify-content-between align-items-center fade show py-2 pe-2" role="alert">
                                <div>
                                    <i className="bi bi-exclamation-octagon-fill me-2" />
                                    Review your courses before payment
                                </div>

                                <button type="button" className="btn btn-warning mb-0 text-primary-hover text-end" data-bs-dismiss="alert" aria-label="Close" >
                                    <i className="bi bi-x-lg text-white" />
                                </button>
                            </div>

                            <div className="p-4 shadow rounded-3 mt-4">
                                <h5 className="mb-0 mb-3">Courses</h5>

                                <div className="table-responsive border-0 rounded-3">
                                    <table className="table align-middle p-4 mb-0">
                                        <tbody className="border-top-2">
                                        {order?.order_items?.map((o, index) => (
                                        <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center">
                                            <div className="w-100px w-md-80px mb-2 mb-md-0">
                                                <img
                                                src={o.course.image}
                                                style={{
                                                    width: "100px",
                                                    height: "70px",
                                                    objectFit: "cover",
                                                }}
                                                className="rounded"
                                                alt=""
                                                />
                                            </div>
                                            <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
                                                <a
                                                href="#"
                                                className="text-decoration-none text-dark"
                                                >
                                                {o.course.title}
                                                </a>
                                            </h6>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <h5 className="text-success mb-0">${o.price}</h5>
                                        </td>
                                        </tr>
                                    ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Link to={`/cart/`} className='btn btn-outline-secondary mt-3'>Edit Cart <i className='fas fa-edit'></i></Link>
                            </div>

                            <div className="shadow p-4 rounded-3 mt-5">
                                <h5 className="mb-0">Personal Details</h5>
                                <form className="row g-3 mt-0">
                                    <div className="col-md-12 bg-light-input">
                                        <label htmlFor="yourName" className="form-label">
                                            Your name *
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-light"
                                            id="yourName"
                                            placeholder="Name"
                                            readOnly
                                            value={order.full_name}
                                        />
                                    </div>
                                    <div className="col-md-6 bg-light-input">
                                        <label htmlFor="emailInput" className="form-label">
                                            Email address *
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control bg-light"
                                            id="emailInput"
                                            placeholder="Email"
                                            readOnly
                                            value={order.email}
                                        />
                                    </div>
                                    {/* Country option */}
                                    <div className="col-md-12 bg-light-input">
                                        <label htmlFor="mobileNumber" className="form-label">
                                            Select country *
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-light"
                                            id="mobileNumber"
                                            placeholder="Country"
                                            readOnly
                                            value={order.country}
                                        />
                                    </div>

                                </form>
                                {/* Form END */}
                            </div>

                        </div>
                        <div className="col-xl-4">
                            <div className="row mb-0">
                                <div className="col-md-6 col-xl-12">
                                    <div className="shadow p-4 mb-4 rounded-3">
                                        <h4 className="mb-4">Order Summary</h4>
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Transaction ID</span>
                                                <p className="mb-0 h6 fw-light">DES23853</p>
                                            </div>

                                        </div>

                                        <div className="input-group mt-5">
                                            <input className="form-control form-control" placeholder="COUPON CODE" />
                                            <button type="button" className="btn btn-primary">Apply</button>
                                        </div>


                                        <div className="p-3 shadow rounded-3 mt-3">
                                            <h4 className="mb-3">Cart Total</h4>
                                            <ul class="list-group mb-3">
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Sub Total
                                                    <span>${order.sub_total}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Discount
                                                    <span>${order.saved}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Tax
                                                    <span>${order.tax_fee}</span>
                                                </li>
                                                <li class="list-group-item d-flex fw-bold justify-content-between align-items-center">
                                                    Total
                                                    <span className='fw-bold'>${order.total}</span>
                                                </li>
                                            </ul>
                                            <div className="d-grid">
                                                <Link to={`/success/txn_id/`} className="btn btn-lg btn-success mt-2"> Pay With PayPal</Link>
                                                <Link to={`/success/txn_id/`} className="btn btn-lg btn-success mt-2"> Pay With Stripe</Link>
                                            </div>
                                            <p className="small mb-0 mt-2 text-center">
                                                By proceeding to payment, you agree to these{" "}<a href="#"> <strong>Terms of Service</strong></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />
        </>
    )
}

export default Checkout