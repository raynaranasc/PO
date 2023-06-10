import React, { Component } from "react";
import Navbar from "../componentes/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function PetCadastroForm() {
  return (
    <div>
      <Navbar />
        
      <div>
        <h2
          className="position-absolute top-20 end-60  mt-4"
          style={{ marginLeft: "235px" }}
        >
          Cadastro de Pet
        </h2>
      </div>
      <div
        className="input-group position-relative ms-5 mt-5"
        style={{ width: "600px", top: "50px" }}
      >
        <span className="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="CPF do responsável"
          aria-label="CPF do responsavel"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        className="input-group position-relative ms-5 mt-5"
        style={{ width: "600px", top: "30px" }}
      >
        <span className="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Nome do pet"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        className="input-group position-relative ms-5"
        style={{ width: "600px", top: "60px" }}
      >
        <span className="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Raça do pet"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        className="input-group position-relative ms-5"
        style={{ width: "600px", top: "90px" }}
      >
        <span className="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Gênero do pet"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        className="input-group position-relative ms-5"
        style={{ width: "600px", top: "120px" }}
      >
        <span className="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Tipo do pet"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        className="input-group position-relative ms-5"
        style={{ width: "600px", top: "140px", left: "250px" }}
      >
      <button type="button" className="btn btn-outline-primary" style={{width: "100px"}}>Cadastrar</button></div>
    </div>
  );
  }

