import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Listgroup({ listatareas, handleDelete }) {
  
  return (
    <ul className="list-group">
      {listatareas?.map((task, index) => (
        <li className="list-group-item" key={index}>
          {task}
          <div className="d-flex justify-content-end">
            <button
              onClick={() => handleDelete(index)}
              type="button"
              className="btn btn-outline-danger"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Listgroup;
