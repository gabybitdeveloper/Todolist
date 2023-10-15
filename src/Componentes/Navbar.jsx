import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove, faHome, faShapes, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Birds <FontAwesomeIcon icon={faDove} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faHome} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><FontAwesomeIcon icon={faShapes} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Objetivos <FontAwesomeIcon icon={faHandshake} /></a>
                </li>
            </ul>
            <span class="navbar-text"> 
                Haciendo una lista de tareas chuli
            </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar