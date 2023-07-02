import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./newspaper.css";
export default function Test(){
return (
    <div>
        <Box
        className="box-middle-main"
        // invalid state when put in css
        sx={{
          margin: "auto",
          width: "50%",
        }}
      >
        <div
          className="item-main"
          style={{
            position:"sticky",
            display: "flex",
            width: "100%",
            flexFlow:"row",
            justifyContent: "flex-start",
            border: "4px dashed blue",
          }}
        >
          <div style={
            {
              display:"block",
              minWidth:"50%",
            }
          }>
            <img src="https://images2.thanhnien.vn/zoom/448_280/528068263637045248/2023/6/29/cb29bf23944e44101d5f-16880405314911966469883-60-0-1310-2000-crop-1688041073352846960095.jpg"></img>
          </div>
          <div
            style={{
              background: "#f7f7f7",
              width:"100%",
              display:"inline-block"
            }}
          >
            <div
              style={{
                margin:"auto",
                width:"80%",
                minWidth:"80%"
                  

              }}
            >
              <Typography variant="h4" mt={3}>
              Xâm nhập hệ thống ngân hàng ở TP.HCM chiếm đoạt 10 tỉ đồng
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                Tại cuộc họp báo về kỳ thi tốt nghiệp THPT 2023 chiều 29.6,
                thiếu tướng Trần Đình Chung, Phó cục trưởng Cục An...
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      <Box
        className={"box-relevant"}
        sx={{
          marginTop: "1.5rem",
          border: "1px dashed black",
        }}
      >
        <div
          style={{
            marginLeft: "1rem",
            //border: "1px dashed red",
          }}
        >
          <Typography variant="h5" justifyContent="center">
            Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM 'thành
            sông', xe chết máy la liệt
          </Typography>
          <Typography variant="subtitle1" justifyContent="center" mt={2}>
            Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần hơn
            465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra thiếu điện".
          </Typography>
        </div>

        <Divider orientation="vertical" flexItem variant="middle" />
        <div
          style={{
            marginLeft: "1rem",
            //border: "1px dashed red",
          }}
        >
          <Typography variant="h5">
            Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM 'thành
            sông', xe chết máy la liệt
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần hơn
            465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra thiếu điện".
          </Typography>
        </div>

        <Divider orientation="vertical" flexItem variant="middle" />

        <div
          style={{
            marginLeft: "1rem",
            //border: "1px dashed red",
          }}
        >
          <Typography variant="h5">
            Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM 'thành
            sông', xe chết máy la liệt
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần hơn
            465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra thiếu điện".
          </Typography>
        </div>
      </Box>
    </div>
)
}