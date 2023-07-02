import NavBarData from "./NavBarData"

export default interface NavBarProps{
    children?: React.ReactNode;
    value: number;
    handleChange:any;
    data: NavBarData[];
}
