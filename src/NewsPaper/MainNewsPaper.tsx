import { Box, Divider, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./newspaper.css";

export default function MainNewsPaper() {
  const [data, updateData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      updateData(await getNews());
      //console.log(data);
    };
    getData();
  }, []);
  return (
    data && (
      <div
        className="box-middle"
        style={{
          flexFlow: "row",
          //, border: "1px dashed red"
        }}
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
              <img src={data[0]["avatar"]}></img>
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
                  {data[0]["tieuDe"]}
                </Typography>
                <Typography variant="subtitle1" mt={2}>
                  {data[0]["tomTat"]}
                </Typography>
              </div>
            </div>
          </div>
        </Box>

        <Box
          className={"box-relevant"}
          sx={{
            marginTop: "1.5rem",
            //border: "1px dashed black",
          }}
        >
          {data.slice(1, 4).map((item, index) => (
            <>
              <div
                style={{
                  marginLeft: "1rem",
                  width: "33.33%",
                  //border: "1px dashed red",
                }}
              >
                <Link href={item.url} underline="none">
                  <Typography
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: "15px",
                      lineHeight: "24px",
                    }}
                    sx={{
                      "&:hover": {
                        color: "#0576f0",
                        background: "none",
                      },
                    }}
                    variant="h5"
                    justifyContent="center"
                  >
                    {item["tieuDe"]}
                  </Typography>
                </Link>
                <Typography variant="subtitle1" justifyContent="center" mt={2}>
                  {item["tomTat"]}
                </Typography>
              </div>
              {index <= 1 && (
                <Divider
                  style={{ paddingLeft: "0.5rem" }}
                  orientation="vertical"
                  flexItem
                  variant="middle"
                ></Divider>
              )}
            </>
          ))}
        </Box>
      </div>
    )
  );
}

async function getNews() {
  const response = await fetch("https://localhost:7275/Home/GetTinTuc", {
    method: "GET",
    cache: "no-cache",
    //mode: "no-cors",
    headers: {
      accept: "*/*",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const res = await response.json();
  return res;
}
