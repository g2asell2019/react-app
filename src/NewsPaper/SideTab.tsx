import { Box, Tabs, Tab, List, ListItem, ListSubheader } from "@mui/material";
import TabPanel from "../NavBar/TabPanel";
import { useState } from "react";
export default function SideTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ border: "2px solid black", padding: "1rem 2rem 1rem 2rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", minWidth: "375px" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ display: "flex" }}
          TabIndicatorProps={{style: {fontSize:"2rem"}}}
        >
          <Tab label="Tin mới" style={{fontWeight:"700",textTransform:"none", fontSize:"1rem"}}  {...a11yProps(0)}/>
          <Tab label="Đọc nhiều" style={{fontWeight:"700",textTransform:"none", fontSize:"1rem"}} {...a11yProps(1)} />
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
            listStyle: "circle"
          }}
        >
          <ListItem>
            <li>
              Ca nương trẻ nhất Việt Nam qua đời ở tuổi 14 vì tai nạn giao thông
            </li>
          </ListItem>
          <ListItem >
            <li>
              Bộ Công an chỉ ra nguyên nhân người dân khó đăng nhập vào VNeID
            </li>
          </ListItem>
          <ListItem>
            <li>
              Công an củng cố hồ sơ xử lý nhân viên bánh mì Nguyên Sinh hành
              hung khách
            </li>
          </ListItem>
          <ListItem>
            <li>
              Giá vàng hôm nay 2.7.2023: Mua vàng nhẫn ngang giá với thế giới
            </li>
          </ListItem>
          <ListItem>
            <li>Xâm nhập hệ thống ngân hàng ở TP.HCM chiếm đoạt 10 tỉ đồng</li>
          </ListItem>
          <ListItem>
            <li>
              Mưa to trắng trời ở TP.HCM, nhiều nơi ngập nước khiến người dân
              vất vả
            </li>
          </ListItem>
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>{" "}
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>{" "}
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>{" "}
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>{" "}
          <ListItem>
            <li>
              FIFA có quyết định tránh tranh cãi, Huỳnh Như đeo các băng đội
              trưởng khác nhau ở World Cup
            </li>
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
