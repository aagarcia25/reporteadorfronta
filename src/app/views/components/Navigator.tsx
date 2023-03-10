import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Logo from "../../assets/img/logo.svg";
import { Button, ButtonGroup, Collapse, Divider, Grid, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from "@mui/material";
import { menus } from "../../interfaces/menu/menu";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { configServices } from "../../services/configServices";
import { getMenus, setMenus } from "../../services/sessionStorage";
import { NavLink } from "react-router-dom";



export default function Navigator(props: DrawerProps, logoFijo: any) {
  const { ...other } = props;
  const navigate = useNavigate();
  const list: menus[] = JSON.parse(String(getMenus()));
  const [open, setOpen] = useState(-1);
  const handleClick = (x: number) => {
    open === x ? setOpen(-1) : setOpen(x);

  };

  const consulta = (data: string) => {
    navigate(data)
    console.log(data)
  };

  useEffect(() => {
    console.log("navigatos")
    // window.location.reload() 

  }, []);
  return (
    <Drawer variant="permanent" PaperProps={{ style: { width: 230 } }}   >
      <Grid container
        position="sticky"
        alignContent="center"
        sx={{ bgcolor: "rgb(255, 255, 255)", width: "100%" }}>
        <Grid container item sx={{ width: "auto", alignItems: "center", paddingTop: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: '550', textAlign: "center", }}>Reporteador</Typography>
        </Grid>
      </Grid>


      <Box
        sx={{
          // overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <div>
          <List  >
            {

              list.map((item, indexx) => {

                return (
                  <div key={indexx} >
                    {/* <NavLink to={item.Path} > */}
                      <Button size="large" variant="contained" color="inherit" key={indexx} sx={{ paddingTop: 4 }} fullWidth>
                        <ListItemText key={indexx}onClick={() => consulta(item.Path)} primary={
                          <Tooltip title={item.Descripcion}>
                            <Typography className="menu-Typography" variant="caption" sx={{ fontFamily: "sans-serif", fontWeight: '550' }} gutterBottom>
                              {item.Menu}
                            </Typography>

                          </Tooltip>
                        } />
                      </Button>
                    {/* </NavLink> */}
                  </div>
                );
              })
            }
          </List>
        </div>
      </Box>
    </Drawer>
  );
}
