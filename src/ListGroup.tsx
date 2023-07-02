import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "./NavBar/NavBar";
import SubNavBarPanel from "./NavBar/SubNavBarPanel";

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(-1);

  const data = [
    {
      name: "Thời sự",
      SubNavData: [
        { name: "Thế giới" },
        { name: "Kinh tế thế giới" },
        { name: "Người Việt năm châu" },
        { name: "Neal" },
        { name: "Burns" },
        { name: "Neal" },
        { name: "Burns" },
        { name: "Neal" },
        { name: "Burns" },
      ],
    },
    {
      name: "Kinh tế 1",
      SubNavData: [{ name: "Barton" }],
    },
    {
      name: "Kinh tế 2",
      SubNavData: [{ name: "Vargas" }],
    },
    {
      name: "Đời sống",
      SubNavData: [{ name: "Phillips" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
    {
      name: "Sức khỏe",
      SubNavData: [{ name: "Meyer" }],
    },
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{ bgcolor: "background.paper", width: "100%", border: "1px groove #ccc!important" }}
      onMouseLeave={(event) => handleChange(event, -1)}
    >
      <NavBar handleChange={handleChange} value={value} data={data} />

      <SubNavBarPanel value={value} data={data}></SubNavBarPanel>
    </Box>
  );
}
