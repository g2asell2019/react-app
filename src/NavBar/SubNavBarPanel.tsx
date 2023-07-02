import { Menu, MenuItem, Button } from "@mui/material";
import { ListSubheader, Divider, Grid } from "@mui/material";
import TabPanel from "./TabPanel";
import { useState } from "react";
import NavBarProps from "./NavBar";

import { useTheme } from "@mui/material/styles";
import NavBarData from "./NavBarData";

interface SubNavBarPanelProps {
    children?: React.ReactNode;
  value: number;
  data: NavBarData[];
}

export default function SubNavBarPanel(props: SubNavBarPanelProps) {
  const theme = useTheme();
  const { value, data } = props;
  return (
    <div>
      {data.map((item, index) => (
        <TabPanel value={value} index={index} dir={theme.direction}>
          <ListSubheader
            sx={{
              color: "#292929",
              opacity: 1,
              fontWeight: "bold",
              fontSize: "2rem",
              maxWidth: "30%",
            }}
          >
            {item.name}
          </ListSubheader>
          <Divider color="blue"></Divider>
          <Grid
            alignContent="flex-start"
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} md={4} flexWrap="wrap">
              {item.SubNavData?.map((subItem) => (
                <Button  {...buttonProps()}>{subItem.name}</Button>
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
