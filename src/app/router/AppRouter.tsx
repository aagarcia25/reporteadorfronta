import { Routes, Route } from 'react-router-dom';
import Inicio from '../views/components/Inicio';
import Bienvenido from '../views/components/Bienvenido';
import { useEffect } from 'react';


export const AppRouter = (
  {
login 
}:{
login : boolean
}

) => {
  const log = login;

  // useEffect(() => {
  //   console.log("AppRouter")
  //   // window.location.reload() 

  // }, []);

  return (
    
    <Inicio>
      <Routes>
        {/* <Route path='/*' element={ <AuthRouter />} /> */}
        <Route path='/' index element={ <Bienvenido /> } />
        <Route path='/configuracion' element={ <Bienvenido /> } />
      </Routes>
    </Inicio>
  );
};
