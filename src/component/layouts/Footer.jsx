import React from "react";
import "../../scss/layouts/footer.scss"
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-2">
                        <div className="col-heading">OUR STORES</div>
                        <ul>
                            <li><Link to={"/todo"}>Todo List</Link></li>
                            <li><a href="">New York</a></li>
                            <li><a href="">London SF</a></li>
                            <li><a href="">Los Angeles</a></li>
                            <li><a href="">Chicago</a></li>
                            <li><a href="">Las Vegas</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <div className="col-heading">OUR STORES</div>
                        <ul>
                            <li><a href="">Ha Noi</a></li>
                            <li><a href="">New York</a></li>
                            <li><a href="">London SF</a></li>
                            <li><a href="">Los Angeles</a></li>
                            <li><a href="">Chicago</a></li>
                            <li><a href="">Las Vegas</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <div className="col-heading">OUR STORES</div>
                        <ul>
                            <li><a href="">Ha Noi</a></li>
                            <li><a href="">New York</a></li>
                            <li><a href="">London SF</a></li>
                            <li><a href="">Los Angeles</a></li>
                            <li><a href="">Chicago</a></li>
                            <li><a href="">Las Vegas</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <div className="col-heading">OUR STORES</div>
                        <ul>
                            <li><a href="">Ha Noi</a></li>
                            <li><a href="">New York</a></li>
                            <li><a href="">London SF</a></li>
                            <li><a href="">Los Angeles</a></li>
                            <li><a href="">Chicago</a></li>
                            <li><a href="">Las Vegas</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="col-heading">About The Store</div>
                     <p>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.

</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer