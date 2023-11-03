import React from "react";
import { Link } from "react-router-dom";

export default function Create() {
  return (
    <div>
      <div className="h-25 bg-info">
        <Link className="text-decoration-none text-bg-warning ms-5" to="/">
          Home
        </Link>
      </div>
      <div className="container">
        <h1 className="text-center">Create a new Product</h1>
        <form className="container">
          <div className="row">
            <div className="col-6">
              <label>ID</label>
              <input name="id" className="form-control text-center" />
            </div>
            <div className="col-6">
              <label>Title</label>
              <input name="title" className="form-control text-center" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Price</label>
              <input name="price" className="form-control text-center" />
            </div>
            <div className="col-6">
              <label>Discount</label>
              <input name="discount" className="form-control text-center" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Rating</label>
              <input name="rating" className="form-control text-center" />
            </div>
            <div className="col-6">
              <label>Stock</label>
              <input name="stock" className="form-control text-center" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Brand</label>
              <input name="brand" className="form-control text-center" />
            </div>
            <div className="col-6">
              <label>Category</label>
              <input name="category" className="form-control text-center" />
            </div>
            <div className="col-12">
              <label>Description</label>
              <textarea className="form-control" />
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger">Back to Home</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
