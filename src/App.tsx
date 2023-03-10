import { useEffect, useState } from 'react';

import './App.css';
import Swal from "sweetalert2";
import { UserServices } from './app/services/UserServices';
import { UserLogin } from './app/interfaces/User';
import jwt_decode from "jwt-decode";
import { HashRouter, useLocation, useNavigate } from 'react-router-dom';
import Slider from './app/views/components/Slider';
import { AppRouter } from './app/router/AppRouter';
import { getRfToken, getToken, setMenus, setRfToken, setToken } from './app/services/sessionStorage';
import { Box, Button, Drawer, Grid, List, Typography } from '@mui/material';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { configServices } from './app/services/configServices';


function App() {
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);
  const jwt = urlParams.get('jwToken');
  const refjwt = urlParams.get('rfToken');
  const [sesionValida, setSesionValida] = useState(false);
  const [openSlider, setOpenSlider] = useState(true);
  const [responseVerify, setResponseVerify] = useState({});
  const navigate = useNavigate();


  const verificatoken = (token: string) => {

    UserServices.verify({}, token).then((res) => {
console.log(res?.status );
      if (res?.status === 200) {
        setResponseVerify(res.data.data);
        setOpenSlider(false);
        setSesionValida(true);
        // navigate("/");

      } else if (res.status === 401) {
        setOpenSlider(false);
        setSesionValida(false);

      }
    });
  };

  const Menu = () => {
    let data = {
      NUMOPERACION: 4,
    };
    configServices.getMenusindex(data).then((res2) => {
      console.log(res2.RESPONSE)
      setMenus(res2.RESPONSE);
   
    });

   
  }; 

  useEffect(() => {
     Menu();
    setToken(jwt);
    setRfToken(refjwt)
    if ((!jwt === null || !jwt === false) && (refjwt === null || !jwt === false)) {

      const decoded: UserLogin = jwt_decode(String(jwt));
      if (((decoded.exp - (Date.now() / 1000)) / 60) > 1) {
        // setToken(jwt);
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

    } else {
      setSesionValida(false)

      Swal.fire({
        title: "No se Encuentra el parametro de Token",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    }
  }, []);


  return (

          <>
          {sesionValida?
           <AppRouter login={sesionValida} />
           :
           ""
        }
       
          </>
  );
}

export default App;


