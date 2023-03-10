

//BLOQUEO DE PANTALLA

//TOKEN
export const setToken = (user: any) => sessionStorage.setItem('tokenRep', JSON.stringify(user));
export const getToken = () => sessionStorage.getItem('tokenRep');

export const setRfToken = (user: any) => sessionStorage.setItem('RftokenRep', JSON.stringify(user));
export const getRfToken = () => sessionStorage.getItem('RftokenRep');
// USUARIOS
export const setUser = (user: any) => sessionStorage.setItem('userRep', JSON.stringify(user));
export const getUser = () => sessionStorage.getItem('userRep');
// PERMISOS
export const setPermisos = (permisos: any) => sessionStorage.setItem('permisosRep', JSON.stringify(permisos));
export const getPermisos = () => ((sessionStorage.getItem('permisosRep')==null)?  "[{}]": sessionStorage.getItem('permisos'));
// ROLES
export const setRoles = (roles: any) => sessionStorage.setItem('rolesRep', JSON.stringify(roles));
export const getRoles = () => sessionStorage.getItem('rolesRep');
// MENUS
export const setMenus = (menus: any) => sessionStorage.setItem('menusRep', JSON.stringify(menus));
export const getMenus = () => sessionStorage.getItem('menusRep');
// PERFIL
export const setPerfiles = (perfiles: any) => sessionStorage.setItem('perfilesRep', JSON.stringify(perfiles));
export const getPerfiles = () => sessionStorage.getItem('perfilesRep');
// DEPARTAMENTO
export const setDepartamento = (departamento: any) => sessionStorage.setItem('departamentoRep', JSON.stringify(departamento));
export const getDepartamento = () => sessionStorage.getItem('departamentoRep');
// MUNICIPIO
export const setMunicipio = (municipio: any) => sessionStorage.setItem('municipioRep', JSON.stringify(municipio));
export const getMunicipio = () => sessionStorage.getItem('municipioRep');

//// ORGANISMO
export const setOrganismo = (organismo: any) => sessionStorage.setItem('organismoRep', JSON.stringify(organismo));
export const getOrganismo = () => sessionStorage.getItem('organismoRep');

//IDENTIFICAR QUE EL USUARIO YA ESTA LOGEADO
export const setlogin = (data: any) => {
  sessionStorage.setItem('login', JSON.stringify(data));
};
export const getlogin = () => sessionStorage.getItem('login');
export const islogin = (): boolean => {
  return getlogin() ===  'true' ? true : false;
};


export const validasessionStorage = (name: string): boolean => {
  return sessionStorage.getItem(name) ? true : false;
};

export const setMunicipios = (data: any) => {
  sessionStorage.setItem('FiltroMunicipios', JSON.stringify(data));
};
export const getMunicipios = () => sessionStorage.getItem('FiltroMunicipios');

export const getItem = (item:string ) :string => {
  return String(sessionStorage.getItem(item));
 }
