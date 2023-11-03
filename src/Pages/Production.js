import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Production() {
  const [production, setProduction] = useState();

  const getProduction = async () => {
    try {
      const result = await axios({
        method: "get",
        url: " http://localhost:9999",
      });
      setProduction(result.data.data);
      return result;
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  useEffect(() => {
    getProduction();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await axios({
        method: "delete",
        url: `http://localhost:9999/product/delete/${id}`,
      });
      setProduction(
        production.filter((item) => item._id !== result.data.data._id)
      );
      return result;
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };
  return (
    <div className="">
      <h1 className="text-center">Front end web developer with react</h1>
      <div className="h-25 bg-info">
        <Link className="text-decoration-none text-white ms-5 pt-6" to="/">
          Home
        </Link>
      </div>
      <Link className="text-decoration-none float-right" to={"/product/add"}>
        Create product
      </Link>
      <h4 className="text-center">Front end web developer with react</h4>
      <div className="text-center">
        <input className="" placeholder="Enter title to search" />
      </div>

      <table className="table table-hover container">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Discount (%)</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {production?.map((item) => (
            <tr key={item?.id}>
              <th scope="row">{item?.id}</th>
              <td>{item?.title}</td>
              <td>{item?.description}</td>
              <td>{item?.price}</td>
              <td>{item?.discountPercentage}</td>
              <td>{item?.brand?.name}</td>
              <td>{item?.category?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
