import React from "react";
import { GlobalContext } from "./GlobalContext";
import { NavLink } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <br />
      <table className="table is-bordered">
        <thead>
          <th>val1</th>
          <th>val2</th>
          <th>val3</th>
          <th>val4</th>
          <th>val5</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <NavLink to={"/DefaultPage"} activeClassName="is-active">
                11
              </NavLink>
            </td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Page1;
