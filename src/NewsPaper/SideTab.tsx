import {
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListSubheader,
  Link,
} from "@mui/material";
import TabPanel from "../NavBar/TabPanel";
import { useEffect, useState } from "react";

export default function SideTab() {
  const [value, setValue] = useState(0);
  const [data, updateData] = useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getData = async () => {
      updateData(await getLastest());
      //console.log(data);
    };
    getData();
  }, []);

  return (
    data && (
      <Box
        sx={{
          //border: "2px solid black",
          padding: "1rem 2rem 1rem 2rem",
        }}
      >
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", minWidth: "375px" }}
        >
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ display: "flex" }}
            TabIndicatorProps={{ style: { fontSize: "2rem" } }}
          >
            <Tab
              label="Tin mới"
              style={{
                fontWeight: "700",
                textTransform: "none",
                fontSize: "1rem",
              }}
              {...a11yProps(0)}
            />
            {/* <Tab
              label="Đọc nhiều"
              style={{
                fontWeight: "700",
                textTransform: "none",
                fontSize: "1rem",
              }}
              {...a11yProps(1)}
            /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 420,
              "& ul": { padding: 0 },
              listStyle: "circle",
            }}
          >
            {data.map((item, index) => (
              <Link
                href={item.url}
                underline="none"
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "#0576f0",
                    background: "none",
                  },
                }}
              >
                <ListItem>
                  <li>{item["tieuDe"]}</li>
                </ListItem>
              </Link>
            ))}
          </List>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          Item Two
        </TabPanel> */}
      </Box>
    )
  );
}

async function getLastest() {
  const response = await fetch(
    "https://localhost:7275/Home/GetLastest?pageSize=10&pageIndex=1",
    {
      method: "GET",
      cache: "no-cache",
      //mode: "no-cors",
      headers: {
        accept: "*/*",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const res = await response.json();
  return res;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
