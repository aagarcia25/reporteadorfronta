import React, { useLayoutEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Swal from "sweetalert2";
import { UserServices } from './app/services/UserServices';
import { UserLogin } from './app/interfaces/User';
import jwt_decode from "jwt-decode";
import { useLocation } from 'react-router-dom';

function App() {
  const query = new URLSearchParams(useLocation().search);
  const jwt = query.get("jwt");

  const verificatoken = (token: string) => {

    UserServices.verify({},token).then((res) => {

      if (res?.status === 200) {
       
      } else if (res.status === 401) {
        //setOpenSlider(false);
        //setlogin(false);
        //setAcceso(false);

      }
    });
  };

  
  useLayoutEffect(() => {

    
    if (!jwt === false) {
      localStorage.clear();

      const decoded: UserLogin = jwt_decode(String(jwt));
      if (((decoded.exp - (Date.now() / 1000)) / 60) > 1) {
      
        console.log(decoded.IdUsuario);
        console.log(decoded.NombreUsuario);
        
        verificatoken(String(jwt));
        
        // RfToken(String(refjwt));
      } else {

        Swal.fire({
          title: "Token no valido",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Aceptar",
        }).then((result) => {
          if (result.isConfirmed) {
           // Pendiente 
          }
        });
      }

    }else{
      Swal.fire({
        title: "No se Encuentra el parametro de Token",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
         // Pendiente 
        }
      });
    }
  },[]);


  return (

    <></>
   
  );
}

export default App;


