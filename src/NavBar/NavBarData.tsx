import SubNavData from "./SubNavData";

export default interface NavBarData{
    idDanhMuc: number;
    tenDanhMuc: string;
    url: string;
    danhMucCon?: SubNavData[];
}
