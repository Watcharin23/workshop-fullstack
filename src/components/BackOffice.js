import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';

function BackOffice (props) {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper p-4">
          {props.children} {/* สำคัญ: ต้องใส่ในตำแหน่งนี้ */}
        </div>
        <Footer />
        <ControlSidebar />
      </div>
    </>
  );
}
export default BackOffice;