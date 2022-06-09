import * as React from "react"
import "../css/ItemsBar.css";
//import "bootstrap/dist/css/bootstrap.min.css"; //ใช้
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillArrowUpLeftSquareFill, BsFillPencilFill } from "react-icons/bs";

function ItemsBar() {
    return (
        <div className="ItemsBar">
            <div className="imglogo">
                <div className="imglogo2">
                    <div className="imgimg">
                        <BsFillArrowUpLeftSquareFill size="2em" color="white" />
                    </div>
                    <div className="imgimg">
                        <BsFillPencilFill size="2em" color="white" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ItemsBar;