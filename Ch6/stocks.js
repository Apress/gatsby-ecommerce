import React from "react"
import { stockData } from './stockdata'

export const Stocks = () => {
  return (
    <>
      {stockData.map((data, key) => {
      	return (
      		  <span key={data} className="stocklevel">{data.inventory_levels[2].available} available</span>
      		)
      })}
    </>
  );
};