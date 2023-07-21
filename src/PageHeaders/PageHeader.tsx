import * as React from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBar from "../NavBar/NavBar";
import SubNavBarPanel from "../NavBar/SubNavBarPanel";

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(-1);
  const [data, updateData] = React.useState(null);
  // const data = [
  //   {
  //     name: "Thời sự",
  //     SubNavData: [
  //       { name: "Thế giới" },
  //       { name: "Kinh tế thế giới" },
  //       { name: "Người Việt năm châu" },
  //       { name: "Neal" },
  //       { name: "Burns" },
  //       { name: "Neal" },
  //       { name: "Burns" },
  //       { name: "Neal" },
  //       { name: "Burns" },
  //     ],
  //   },
  //   {
  //     name: "Kinh tế 1",
  //     SubNavData: [{ name: "Barton" }],
  //   },
  //   {
  //     name: "Kinh tế 2",
  //     SubNavData: [{ name: "Vargas" }],
  //   },
  //   {
  //     name: "Đời sống",
  //     SubNavData: [{ name: "Phillips" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  //   {
  //     name: "Sức khỏe",
  //     SubNavData: [{ name: "Meyer" }],
  //   },
  // ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //console.log(newValue);
    setValue(newValue);
  };
  
 
  useEffect(() => {
    const getData = async () => {
      
      //updateData(await getCategory());
      updateData(await getCategory());
      
    };
    getData();
  }, [])
  
 
  return data && (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        border: "1px groove #ccc!important",
        position: "fixed",
        zIndex: "1",
      }}
      onMouseLeave={(event) => handleChange(event, -1)}
    >
      <NavBar handleChange={handleChange} value={value} data={data} />

      <SubNavBarPanel value={value} data={data}></SubNavBarPanel>
    </Box>
  );
}

async function getCategory(){
  const response = await fetch(
    'https://localhost:7275/Category/GetDanhMuc',
    {
      method: "GET",
      cache: "no-cache",
      //mode: "no-cors",
      headers: {
        "accept": "*/*"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
  
  return [
    {
        "idDanhMuc": 1854,
        "tenDanhMuc": "Thời sự",
        "url": "thoi-su",
        "danhMucCon": [
            {
                "idDanhMuc": 185227,
                "tenDanhMuc": "Chính trị",
                "url": "chinh-tri"
            },
            {
                "idDanhMuc": 1855,
                "tenDanhMuc": "Pháp luật",
                "url": "phap-luat"
            },
            {
                "idDanhMuc": 185176,
                "tenDanhMuc": "Dân sinh",
                "url": "dan-sinh"
            },
            {
                "idDanhMuc": 185196,
                "tenDanhMuc": "Lao động - Việc làm",
                "url": "lao-dong-viec-lam"
            },
            {
                "idDanhMuc": 185179,
                "tenDanhMuc": "Quyền được biết",
                "url": "quyen-duoc-biet"
            },
            {
                "idDanhMuc": 1856,
                "tenDanhMuc": "Phóng sự / Điều tra",
                "url": "phong-su--dieu-tra"
            },
            {
                "idDanhMuc": 18564,
                "tenDanhMuc": "Quốc phòng",
                "url": "quoc-phong"
            },
            {
                "idDanhMuc": 185304,
                "tenDanhMuc": "Chống tin giả",
                "url": "chong-tin-gia"
            },
            {
                "idDanhMuc": 185560,
                "tenDanhMuc": "Thời luận",
                "url": "thoi-luan"
            }
        ]
    },
    {
        "idDanhMuc": 18566,
        "tenDanhMuc": "Thế giới",
        "url": "the-gioi",
        "danhMucCon": [
            {
                "idDanhMuc": 185228,
                "tenDanhMuc": "Kinh tế thế giới",
                "url": "kinh-te-the-gioi"
            },
            {
                "idDanhMuc": 185144,
                "tenDanhMuc": "Quân sự",
                "url": "quan-su"
            },
            {
                "idDanhMuc": 185129,
                "tenDanhMuc": "Góc nhìn",
                "url": "goc-nhin"
            },
            {
                "idDanhMuc": 185130,
                "tenDanhMuc": "Hồ sơ",
                "url": "ho-so"
            },
            {
                "idDanhMuc": 18548,
                "tenDanhMuc": "Người Việt năm châu",
                "url": "nguoi-viet-nam-chau"
            },
            {
                "idDanhMuc": 185269,
                "tenDanhMuc": "Chuyện lạ",
                "url": "chuyen-la"
            }
        ]
    },
    {
        "idDanhMuc": 18549,
        "tenDanhMuc": "Kinh tế",
        "url": "kinh-te",
        "danhMucCon": [
            {
                "idDanhMuc": 185292,
                "tenDanhMuc": "Kinh tế xanh",
                "url": "kinh-te-xanh"
            },
            {
                "idDanhMuc": 185135,
                "tenDanhMuc": "Chính sách - Phát triển",
                "url": "chinh-sach-phat-trien"
            },
            {
                "idDanhMuc": 185236,
                "tenDanhMuc": "Ngân hàng",
                "url": "ngan-hang"
            },
            {
                "idDanhMuc": 18550,
                "tenDanhMuc": "Chứng khoán",
                "url": "chung-khoan"
            },
            {
                "idDanhMuc": 185237,
                "tenDanhMuc": "Doanh nghiệp",
                "url": "doanh-nghiep"
            },
            {
                "idDanhMuc": 18552,
                "tenDanhMuc": "Khát vọng Việt Nam",
                "url": "doanh-nhan"
            },
            {
                "idDanhMuc": 185133,
                "tenDanhMuc": "Làm giàu",
                "url": "lam-giau"
            },
            {
                "idDanhMuc": 18554,
                "tenDanhMuc": "Địa ốc",
                "url": "dia-oc"
            }
        ]
    },
    {
        "idDanhMuc": 18517,
        "tenDanhMuc": "Đời sống",
        "url": "doi-song",
        "danhMucCon": [
            {
                "idDanhMuc": 185603,
                "tenDanhMuc": "Tết",
                "url": "tet"
            },
            {
                "idDanhMuc": 185231,
                "tenDanhMuc": "Người sống quanh ta",
                "url": "nguoi-song-quanh-ta"
            },
            {
                "idDanhMuc": 185177,
                "tenDanhMuc": "Gia đình",
                "url": "gia-dinh"
            },
            {
                "idDanhMuc": 18518,
                "tenDanhMuc": "Ẩm thực",
                "url": "am-thuc"
            },
            {
                "idDanhMuc": 185565,
                "tenDanhMuc": "Cộng đồng",
                "url": "cong-dong"
            },
            {
                "idDanhMuc": 185596,
                "tenDanhMuc": "Một nửa thế giới",
                "url": "mot-nua-the-gioi"
            }
        ]
    },
    {
        "idDanhMuc": 185234,
        "tenDanhMuc": "Du lịch",
        "url": "du-lich",
        "danhMucCon": [
            {
                "idDanhMuc": 185246,
                "tenDanhMuc": "Khám phá",
                "url": "kham-pha"
            },
            {
                "idDanhMuc": 185583,
                "tenDanhMuc": "Tin tức - Sự kiện",
                "url": "tin-tuc-su-kien"
            },
            {
                "idDanhMuc": 185584,
                "tenDanhMuc": "Chơi gì, ăn đâu, đi thế nào?",
                "url": "choi-gi-an-dau-di-the-nao"
            },
            {
                "idDanhMuc": 185585,
                "tenDanhMuc": "Bất động sản du lịch",
                "url": "bat-dong-san-du-lich"
            },
            {
                "idDanhMuc": 185586,
                "tenDanhMuc": "Câu chuyện du lịch",
                "url": "cau-chuyen-du-lich"
            }
        ]
    },
    {
        "idDanhMuc": 18593,
        "tenDanhMuc": "Văn hoá",
        "url": "van-hoa",
        "danhMucCon": [
            {
                "idDanhMuc": 185149,
                "tenDanhMuc": "Câu chuyện văn hóa",
                "url": "cau-chuyen-van-hoa"
            },
            {
                "idDanhMuc": 185283,
                "tenDanhMuc": "Khảo cứu",
                "url": "khao-cuu"
            },
            {
                "idDanhMuc": 185284,
                "tenDanhMuc": "Xem - Nghe",
                "url": "xem-nghe"
            },
            {
                "idDanhMuc": 1852028,
                "tenDanhMuc": "Sách hay",
                "url": "sach-hay"
            },
            {
                "idDanhMuc": 185297,
                "tenDanhMuc": "Sống đẹp",
                "url": "song-dep"
            },
            {
                "idDanhMuc": 185303,
                "tenDanhMuc": "Món ngon Hà Nội",
                "url": "mon-ngon-ha-noi"
            },
            {
                "idDanhMuc": 185576,
                "tenDanhMuc": "Nghĩa tình miền Tây",
                "url": "nghia-tinh-mien-tay"
            },
            {
                "idDanhMuc": 1852037,
                "tenDanhMuc": "Hào khí miền Đông",
                "url": "hao-khi-mien-dong"
            }
        ]
    },
    {
        "idDanhMuc": 185285,
        "tenDanhMuc": "Giải trí",
        "url": "giai-tri",
        "danhMucCon": [
            {
                "idDanhMuc": 185582,
                "tenDanhMuc": "Kết nối",
                "url": "ket-noi"
            },
            {
                "idDanhMuc": 185101,
                "tenDanhMuc": "Phim",
                "url": "phim"
            },
            {
                "idDanhMuc": 18595,
                "tenDanhMuc": "Truyền hình",
                "url": "truyen-hinh"
            },
            {
                "idDanhMuc": 185270,
                "tenDanhMuc": "Đời nghệ sĩ",
                "url": "doi-nghe-si"
            }
        ]
    },
    {
        "idDanhMuc": 18569,
        "tenDanhMuc": "Giới trẻ",
        "url": "gioi-tre",
        "danhMucCon": [
            {
                "idDanhMuc": 185181,
                "tenDanhMuc": "Sống - Yêu - Ăn - Chơi",
                "url": "song-yeu-an-choi"
            },
            {
                "idDanhMuc": 1852025,
                "tenDanhMuc": "Tiếp sức gen Z mùa thi",
                "url": "tiep-suc-gen-z-mua-thi"
            },
            {
                "idDanhMuc": 1852026,
                "tenDanhMuc": "Cơ hội nghề nghiệp",
                "url": "co-hoi-nghe-nghiep"
            },
            {
                "idDanhMuc": 185229,
                "tenDanhMuc": "Đoàn - Hội",
                "url": "doan-hoi"
            },
            {
                "idDanhMuc": 185183,
                "tenDanhMuc": "Kết nối",
                "url": "ket-noi"
            },
            {
                "idDanhMuc": 1852027,
                "tenDanhMuc": "Khởi nghiệp",
                "url": "khoi-nghiep"
            },
            {
                "idDanhMuc": 185182,
                "tenDanhMuc": "Thế giới mạng",
                "url": "the-gioi-mang"
            },
            {
                "idDanhMuc": 1852034,
                "tenDanhMuc": "Gương mặt trẻ",
                "url": "guong-mat-tre"
            }
        ]
    },
    {
        "idDanhMuc": 18526,
        "tenDanhMuc": "Giáo dục",
        "url": "giao-duc",
        "danhMucCon": [
            {
                "idDanhMuc": 185273,
                "tenDanhMuc": "Tuyển sinh",
                "url": "tuyen-sinh"
            },
            {
                "idDanhMuc": 185136,
                "tenDanhMuc": "Chọn nghề - Chọn trường",
                "url": "chon-nghe-chon-truong"
            },
            {
                "idDanhMuc": 18528,
                "tenDanhMuc": "Du học",
                "url": "du-hoc"
            },
            {
                "idDanhMuc": 185138,
                "tenDanhMuc": "Nhà trường",
                "url": "nha-truong"
            },
            {
                "idDanhMuc": 1852009,
                "tenDanhMuc": "Phụ huynh",
                "url": "phu-huynh"
            },
            {
                "idDanhMuc": 185259,
                "tenDanhMuc": "Tra cứu điểm thi",
                "url": "tra-cuu-diem-thi"
            },
            {
                "idDanhMuc": 185298,
                "tenDanhMuc": "Cẩm nang tuyển sinh 2023",
                "url": "cam-nang-tuyen-sinh-2023"
            }
        ]
    },
    {
        "idDanhMuc": 185318,
        "tenDanhMuc": "Thể thao",
        "url": "the-thao",
        "danhMucCon": [
            {
                "idDanhMuc": 1852035,
                "tenDanhMuc": "World Cup nữ 2023",
                "url": "world-cup-nu-2023"
            },
            {
                "idDanhMuc": 1852008,
                "tenDanhMuc": "Bóng đá Thanh Niên Sinh viên",
                "url": "bong-da-thanh-nien-sinh-vien"
            },
            {
                "idDanhMuc": 185375,
                "tenDanhMuc": "Bóng đá Việt Nam",
                "url": "bong-da-viet-nam"
            },
            {
                "idDanhMuc": 185380,
                "tenDanhMuc": "Bóng đá Quốc tế",
                "url": "bong-da-quoc-te"
            },
            {
                "idDanhMuc": 185417,
                "tenDanhMuc": "Tin chuyển nhượng",
                "url": "tin-chuyen-nhuong"
            },
            {
                "idDanhMuc": 185418,
                "tenDanhMuc": "Thể thao & Cộng đồng",
                "url": "the-thao-cong-dong"
            },
            {
                "idDanhMuc": 185390,
                "tenDanhMuc": "Thể thao khác",
                "url": "the-thao-khac"
            },
            {
                "idDanhMuc": 185421,
                "tenDanhMuc": "Bóng rổ",
                "url": "bong-ro"
            }
        ]
    },
    {
        "idDanhMuc": 18565,
        "tenDanhMuc": "Sức khoẻ",
        "url": "suc-khoe",
        "danhMucCon": [
            {
                "idDanhMuc": 185223,
                "tenDanhMuc": "Khỏe đẹp mỗi ngày",
                "url": "khoe-dep-moi-ngay"
            },
            {
                "idDanhMuc": 18521,
                "tenDanhMuc": "Làm đẹp",
                "url": "lam-dep"
            },
            {
                "idDanhMuc": 185147,
                "tenDanhMuc": "Giới tính",
                "url": "gioi-tinh"
            }
        ]
    },
    {
        "idDanhMuc": 185315,
        "tenDanhMuc": "Công nghệ - Game",
        "url": "cong-nghe-game",
        "danhMucCon": [
            {
                "idDanhMuc": 185330,
                "tenDanhMuc": "Tin tức công nghệ",
                "url": "tin-tuc-cong-nghe"
            },
            {
                "idDanhMuc": 185566,
                "tenDanhMuc": "Blockchain",
                "url": "blockchain"
            },
            {
                "idDanhMuc": 18514,
                "tenDanhMuc": "Sản phẩm",
                "url": "san-pham"
            },
            {
                "idDanhMuc": 185567,
                "tenDanhMuc": "Xu hướng - Chuyển đổi số",
                "url": "xu-huong-chuyen-doi-so"
            },
            {
                "idDanhMuc": 185326,
                "tenDanhMuc": "Thủ thuật",
                "url": "thu-thuat"
            },
            {
                "idDanhMuc": 185320,
                "tenDanhMuc": "eSports",
                "url": "esports"
            },
            {
                "idDanhMuc": 185327,
                "tenDanhMuc": "Gaming House",
                "url": "gaming-house"
            },
            {
                "idDanhMuc": 185568,
                "tenDanhMuc": "Game mới",
                "url": "game-moi"
            }
        ]
    },
    {
        "idDanhMuc": 185317,
        "tenDanhMuc": "Xe",
        "url": "xe",
        "danhMucCon": [
            {
                "idDanhMuc": 185359,
                "tenDanhMuc": "Thị trường xe",
                "url": "thi-truong-xe"
            },
            {
                "idDanhMuc": 185589,
                "tenDanhMuc": "Xe điện",
                "url": "xe-dien"
            },
            {
                "idDanhMuc": 185356,
                "tenDanhMuc": "Đánh giá xe",
                "url": "danh-gia-xe"
            },
            {
                "idDanhMuc": 185362,
                "tenDanhMuc": "Tư vấn xe",
                "url": "tu-van-xe"
            },
            {
                "idDanhMuc": 185363,
                "tenDanhMuc": "Video",
                "url": "video"
            },
            {
                "idDanhMuc": 185374,
                "tenDanhMuc": "Diễn đàn xe",
                "url": "dien-dan-xe"
            },
            {
                "idDanhMuc": 185592,
                "tenDanhMuc": "Luật giao thông",
                "url": "luat-giao-thong"
            },
            {
                "idDanhMuc": 185355,
                "tenDanhMuc": "Xe & Đời sống",
                "url": "xe-doi-song"
            }
        ]
    },
    {
        "idDanhMuc": 185319,
        "tenDanhMuc": "Thời trang trẻ",
        "url": "thoi-trang-tre",
        "danhMucCon": [
            {
                "idDanhMuc": 185457,
                "tenDanhMuc": "Thời trang 24/7",
                "url": "thoi-trang-247"
            },
            {
                "idDanhMuc": 185458,
                "tenDanhMuc": "Giữ dáng",
                "url": "giu-dang"
            },
            {
                "idDanhMuc": 1852032,
                "tenDanhMuc": "Thẩm mỹ an toàn",
                "url": "tham-my-an-toan"
            },
            {
                "idDanhMuc": 185459,
                "tenDanhMuc": "Thời trang nghề & nghiệp",
                "url": "thoi-trang-nghe-nghiep"
            },
            {
                "idDanhMuc": 185460,
                "tenDanhMuc": "Tận hưởng",
                "url": "tan-huong"
            },
            {
                "idDanhMuc": 185461,
                "tenDanhMuc": "Video",
                "url": "video"
            },
            {
                "idDanhMuc": 185462,
                "tenDanhMuc": "Thư viện thời trang",
                "url": "thu-vien-thoi-trang"
            }
        ]
    },
    {
        "idDanhMuc": 185190,
        "tenDanhMuc": "Bạn đọc",
        "url": "ban-doc",
        "danhMucCon": [
            {
                "idDanhMuc": 185306,
                "tenDanhMuc": "Từ đơn thư bạn đọc",
                "url": "tu-don-thu-ban-doc"
            },
            {
                "idDanhMuc": 185309,
                "tenDanhMuc": "Hỏi và đáp",
                "url": "hoi-va-dap"
            },
            {
                "idDanhMuc": 185310,
                "tenDanhMuc": "Bạn đọc viết",
                "url": "ban-doc-viet"
            },
            {
                "idDanhMuc": 185311,
                "tenDanhMuc": "Cơ quan chưa trả lời bạn đọc",
                "url": "co-quan-chua-tra-loi-ban-doc"
            },
            {
                "idDanhMuc": 185312,
                "tenDanhMuc": "Trả lời bạn đọc",
                "url": "tra-loi-ban-doc"
            },
            {
                "idDanhMuc": 185313,
                "tenDanhMuc": "Lá lành đùm lá rách",
                "url": "la-lanh-dum-la-rach"
            },
            {
                "idDanhMuc": 185314,
                "tenDanhMuc": "Tấm lòng vàng",
                "url": "tam-long-vang"
            }
        ]
    },
    {
        "idDanhMuc": 185132,
        "tenDanhMuc": "Tiêu dùng thông minh",
        "url": "tieu-dung-thong-minh",
        "danhMucCon": [
            {
                "idDanhMuc": 1852021,
                "tenDanhMuc": "Mới- Mới- Mới",
                "url": "moi-moi-moi"
            },
            {
                "idDanhMuc": 1852022,
                "tenDanhMuc": "Mua một chạm",
                "url": "mua-mot-cham"
            },
            {
                "idDanhMuc": 1852023,
                "tenDanhMuc": "Ở đâu rẻ?",
                "url": "o-dau-re"
            },
            {
                "idDanhMuc": 1852024,
                "tenDanhMuc": "Góc người tiêu dùng",
                "url": "goc-nguoi-tieu-dung"
            }
        ]
    }
];
}