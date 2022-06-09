import './css/Device.css';
import Header from "../Navbar/Header";
import Menu from "../Navbar/Menu-sidebar";

function PageDetail() {
    return(
        <div>
            <Menu/>
            <Header />
            <div className="container" style={{marginLeft:'230px' ,width:'85%' }}>
                <div className="textName">Detail</div>
                <div>ID อุปกรณ์</div>
                <div className='boxdetail'> รายละเอียด</div>
            </div>
        </div>
    );
}
export default PageDetail;