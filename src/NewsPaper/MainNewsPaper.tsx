import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./newspaper.css";
export default function MainNewsPaper() {
  return (
    <div
      className="box-middle"
      style={{ flexFlow: "row", border: "1px dashed red" }}
    >
      <Box
        className="box-middle-main"
        // invalid state when put in css
        sx={{
          minWidth: "900px",
          margin: "auto",
        }}
      >
        <div
          className="item-main"
          style={{
            display: "flex",
            width: "100%",
            flexFlow: "row",
            flexShrink: 0,
            //border: "4px dashed blue",
          }}
        >
          <div
            style={{
              display: "block",
            }}
          >
            <img src="https://images2.thanhnien.vn/zoom/448_280/528068263637045248/2023/6/29/cb29bf23944e44101d5f-16880405314911966469883-60-0-1310-2000-crop-1688041073352846960095.jpg"></img>
          </div>
          <div
            style={{
              background: "#f7f7f7",
              display: "inline-block",
              padding: "1rem 2rem 1rem 2rem",
            }}
          >
            <div
              style={{
                minWidth: "400px",
                margin: "auto",
              }}
            >
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "34px",
                  marginBottom: "16px",
                }}
                variant="h4"
                mt={3}
              >
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
          <Typography
            style={{ fontWeight: "700", fontSize: "15px", lineHeight: "24px" }}
            variant="h5"
            justifyContent="center"
          >
            Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM 'thành
            sông', xe chết máy la liệt
          </Typography>
          <Typography variant="subtitle1" justifyContent="center" mt={2}>
            Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần hơn
            465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra thiếu điện".
          </Typography>
        </div>

        <Divider
          style={{ paddingLeft: "0.5rem" }}
          orientation="vertical"
          flexItem
          variant="middle"
        />
        <div
          style={{
            marginLeft: "1rem",
            //border: "1px dashed red",
          }}
        >
          <Typography
            style={{ fontWeight: "700", fontSize: "15px", lineHeight: "24px" }}
            variant="h5"
          >
            Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM 'thành
            sông', xe chết máy la liệt
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần hơn
            465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra thiếu điện".
          </Typography>
        </div>

        <Divider
          style={{ paddingLeft: "0.5rem" }}
          orientation="vertical"
          flexItem
          variant="middle"
        />

        <div
          style={{
            marginLeft: "1rem",
            //border: "1px dashed red",
          }}
        >
          <Typography
            style={{ fontWeight: "700", fontSize: "15px", lineHeight: "24px" }}
            variant="h5"
          >
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
    /*
    <Box
      display="flex"
      justifyContent="center"
      sx={{ p: 2, border: "1px dashed grey", background:"#f6f6f6" }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          //border: "1px dashed red",
        }}
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            //border: "1px dashed red",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "center",
              //border: "1px dashed red",
            }}
          >
            <img src="https://images2.thanhnien.vn/zoom/448_280/528068263637045248/2023/6/29/cb29bf23944e44101d5f-16880405314911966469883-60-0-1310-2000-crop-1688041073352846960095.jpg"></img>
            <div>
              <Typography variant="h4">
                Thí sinh làm lộ đề thi bị xử lý thế nàoaaaaaaaaaaaaa
              </Typography>
              <Typography variant="subtitle1">
                Tại cuộc họp báo về kỳ thi tốt nghiệp THPT 2023 chiều 29.6,
                thiếu tướng Trần Đình Chung, Phó cục trưởng Cục An...
              </Typography>
            </div>
          </div>
        </Box>

        <Grid
          sx={{
            display: "flex",
            width: "50%",
            justifyItems: "center",
            justifyContent: "center",
            //border: "1px dashed red",
          }}
          container
          xs={6}
          columns={3}
          columnSpacing={2}
        >
          <Grid xs={1} columns={1}>
            <div>
              <Typography variant="h5">
                Mưa lớn gây ngập nặng chiều nay: Nhiều tuyến đường ở TP.HCM
                'thành sông', xe chết máy la liệt
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                Trong đợt nắng nóng sắp tới, ngày cao nhất miền Bắc có thể cần
                hơn 465 triệu kWh, song Bộ Công Thương cho biết "khó xảy ra
                thiếu điện".
              </Typography>
            </div>
          </Grid>

          <Grid xs={1} columns={1}>
            <div>
              <Typography variant="h5">
                Vụ sạt lở đất ở Đà Lạt: Thủ tướng yêu cầu xử lý nghiêm nếu có vi
                phạm
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                Ngày 29.6, Phó thủ tướng Trần Lưu Quang đã ký công điện của Thủ
                tướng Chính phủ về tập trung khắc phục hậu quả sạt lở đất ở Đà
                Lạt ...
              </Typography>
            </div>
          </Grid>
          <Grid xs={1} columns={1}>
            <div>
              <Typography variant="h5">
                Chấm thi tốt nghiệp THPT từ ngày mai, 1 - 2 ngày tới công bố đáp
                án
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                Ông Huỳnh Văn Chương, Cục trưởng Cục Quản lý chất lượng Bộ
                GD-ĐT, cho biết ngày mai 30.6 sẽ triển khai công tác chấm thi kỳ
                thi tốt..
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    */
  );
}
