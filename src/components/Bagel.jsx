import React from "react";
import { Link } from "react-router-dom";

function Bagel({ bagel, id }) {
  return (
    <tr>
      <td>
        {bagel.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/bagels/${id}`}>{bagel.name}</Link>
      </td>
    </tr>
  );
}

export default Bagel;
