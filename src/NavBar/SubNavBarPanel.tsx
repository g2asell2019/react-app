import { Menu, MenuItem, Button, Link } from "@mui/material";
import { ListSubheader, Divider, Grid } from "@mui/material";
import TabPanel from "./TabPanel";
import { useState } from "react";
import NavBarProps from "./NavBar";

import { useTheme } from "@mui/material/styles";
import NavBarData from "./NavBarData";
import SubNavData from "./SubNavData";

interface SubNavBarPanelProps {
    children?: React.ReactNode;
  value: number;
  data: NavBarData[];
}

export default function SubNavBarPanel(props: SubNavBarPanelProps) {
  const theme = useTheme();
  const { value, data } = props;
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <TabPanel key={index} value={value} index={index} dir={theme.direction}>
          <Link href={"https://thanhnien.vn/" +item.url } underline="none">
          <ListSubheader
            sx={{
              color: "#292929",
              opacity: 1,
              fontWeight: "bold",
              fontSize: "2rem",
              maxWidth: "30%",
              paddingTop: '2.5rem',
              "&:hover": {
                color: "#0576f0",
                background: "none",
              },
            }}
            
            >
            {item.tenDanhMuc}
          </ListSubheader>
            </Link>
          <Divider color="blue"></Divider>
          <Grid
            alignContent="flex-start"
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} md={4} flexWrap="wrap">
              {item.danhMucCon?.map((subItem) => (
                <Link href={"https://thanhnien.vn/" +item.url + "/" + subItem.url}>
                <Button  {...buttonProps()}>{subItem.tenDanhMuc}</Button>
                </Link>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}

function buttonProps() {
  return {
    sx: {
      color: "black",
      opacity: 1,
      textTransform: "none",
      fontWeight: "bold",
      "&:hover": {
        color: "#0576f0",
        background: "none",
      },
    },
    variant: "text",
  };
}
