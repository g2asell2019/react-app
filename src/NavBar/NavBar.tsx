import {AppBar, Tabs, Tab} from "@mui/material";
import {useState} from "react"
import NavBarProps from "./NavBarProps"
import NavBarData from "./NavBarData"
import {Link} from "@mui/material"

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function NavBar(props:NavBarProps){
    //const [value, setValue] = useState(-1);
  
    const {children, data, value, handleChange} = props;


    return (<AppBar style={{}}>
    <Tabs
      sx={{
        width: "100%",
        color: "#292929",
        opacity: 1,
        
        //textTransform: 'none',
        backgroundColor: "white",
        
      }}
      value={value}
      onChange={handleChange}
      orientation="horizontal"
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      {data.map((item, index) => (
        <Tab
          key={item.idDanhMuc}
          value={item.idDanhMuc}
          sx={{
            opacity: 1,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              color: "#0576f0",
            },
          }}
          label={item.tenDanhMuc}
          {...a11yProps(index)}
          onMouseEnter={(event) => handleChange(event, index)}


          //onMouseLeave={(event) => (handleChange(event, -1))}
        />
      ))}
    </Tabs>
  </AppBar>)
}