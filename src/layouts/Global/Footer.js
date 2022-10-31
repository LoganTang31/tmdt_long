import {
  UilCarSideview,
  UilMapMarker,
  UilShoppingCartAlt,
  UilUser,
  UilSearch,
  UilBars,
  UilShoppingCart,
  UilTruck,
  UilBell,
  UilCheckCircle,
  UilArrowLeft,
  UilArrowRight,
  UilSync,
  UilInfoCircle,
  UilPhone,
  UilFacebook,
  UilBox,
  UilMap,
  UilClipboardAlt,
  UilCommentVerify,
  UilGlobe,
  UilInstagramAlt,
  UilYoutube,
  UilTwitterAlt,
} from "@iconscout/react-unicons";
import { Col, Row } from "antd";
import React from "react";
import "./footer.scss";
import logo from "../../assets/image/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo3 from "../../assets/image/hinh5.png";
import logo4 from "../../assets/image/hinh8.png";

import logo1 from "../../assets/image/footer1.png";
export default function Footer() {
  return (
    <footer className="the-footer">
      <div className="flex-4">
        <div className="flex-5">
          <p className="title-1">Tự tin mua sắm cùng Asicss</p>
        </div>
        <div className="section-1">
          <div className="section-check">
            <UilCheckCircle className="icon-check" />
            <p className="title-2">Chế độ bảo đảm hành bận tâm </p>
            <h1 className="title-3">
              Tất cả các sản phẩm do Asicss bán ra đều được tuân thủ điều kiện
              bảo hành của nhà cung cấp, hãng sản xuất. Nếu có vấn đề về chất
              lượng sản phẩm, Asicss xin cam kết sẽ hỗ trợ Quý khách tới cùng.
            </h1>
            <h2 className="title-4">
              Chi tiết <UilArrowRight className="icon-left" />
            </h2>
            <div className="section-tranf">
              <UilSync className="icon-tranf" />
              <p className="title-5">Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</p>
              <h1 className="title-6">
                Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ trợ
                đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc cảm thấy
                sản phẩm chưa đáp ứng được nhu cầu.
              </h1>
              <h2 className="title-7">
                Chi tiết <UilArrowRight className="icon-left-1" />
              </h2>
            </div>
          </div>
        </div>
        <div className="duongngang">
          <hr className="duongngang1"></hr>
        </div>
        <div className="img-footer-section-1">
          <img src={logo1} className="footer-section-1"></img>
        </div>
        <div class="section-inf-1">
          <div className="section-inf">
            <UilInfoCircle className="icon-inf" />
            <p className="title-8">Thông tin hữu ích </p>
          </div>
          <div className="section-hotline">
            <UilPhone className="icon-phone" />
            <p className="title-phone"> HotLine: 19008990</p>
          </div>
          <div className="section-hotline">
            <UilFacebook className="icon-phone" />
            <p className="title-phone"> Group trao đổi và hỗ trợ </p>
          </div>
          <div className="section-hotline">
            <UilMap className="icon-phone" />
            <p className="title-phone"> Hệ thống cửa hàng</p>
          </div>
          <div className="section-all-1">
            <div className="section-all">
              <UilBox className="icon-all" />
              <p className="title-all"> Vận chuyển, thanh toán</p>
            </div>
            <div className="section-all">
              <UilClipboardAlt className="icon-all" />
              <p className="title-phone"> Tra cứu, bảo hành </p>
            </div>
            <div className="section-all">
              <UilCommentVerify className="icon-all" />
              <p className="title-all"> Bảng giá dịch vụ</p>
            </div>
          </div>
        </div>
        <div className="duongngang">
          <hr className="duongngang1"></hr>
        </div>
        <div className="section-hi">
          <UilGlobe className="icon-hi" />
          <p className="title-9">Asicss trên social netwworks </p>
        </div>
        <div className="section-2">
          <div className="facebook">
            <UilFacebook class="icon-facebook" />
            <p className="title-all-1"> Facebook</p>
          </div>
          <div className="facebook">
            <UilInstagramAlt class="icon-facebook" />
            <p className="title-all-1"> Instagram</p>
          </div>
          <div className="facebook">
            <UilYoutube class="icon-youtube" />
            <p className="title-all-1"> Youtube</p>
          </div>
          <div className="facebook">
            <UilTwitterAlt class="icon-facebook" />
            <p className="title-all-1"> Twitter</p>
          </div>
        </div>
        <div className="flex-6">
          <div className="logo">
            <img src={logo} className="logo-footer" />
            <p className="edit-since">-Since 2022-</p>
          </div>
          <div className="section-about">
            <div className="section-about-1">
              <p className="vechungtoi">Về Chúng Tôi</p>
              <p className="vechungtoi">Vì Khách Hàng</p>
              <p className="vechungtoi">Đội Ngũ</p>
            </div>
            <div className="section-about-2">
              <div className="section-about-3">
                <p className="vechungtoi">Tin Tức</p>
                <p className="vechungtoi1"> Khuyến Mãi</p>
                <img src={logo3} className="bocongthuong" />
              </div>
            </div>
          </div>
          <div className="img-cuahang">
            <img src={logo4} className="footer-end" />
          </div>
        </div>
      </div>
    </footer>
  );
}
