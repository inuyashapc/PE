import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductionDetail() {
  const [production, setProduction] = useState();
  const { id } = useParams();
  const getProduct = async () => {
    try {
      if (id) {
        const result = await axios({
          method: "get",
          url: `http://localhost:9999/product/detail/${id}`,
        });
        setProduction(result.data.data);
        return result;
      }
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div className="container">
      <div className="container border py-4 px-6 mt-4">
        <p>Id: {production?.id}</p>
        <p>Title: {production?.title}</p>
        <p>Description: {production?.description}</p>
        <p>Price: {production?.price}</p>
        <p>Discount (%): {production?.discountPercentage}</p>
        <p>Rating: {production?.rating}</p>
        <p>Stock: {production?.stock}</p>
        <Link to={"/"} className="btn btn-warning text-white">
          Back to list
        </Link>
      </div>
    </div>
  );
}
