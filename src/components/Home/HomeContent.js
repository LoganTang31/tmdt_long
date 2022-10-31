import { UilFilter } from "@iconscout/react-unicons";
import { Card, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { show, unshow } from "../Login/LoginSlice";
import "./HomeContent.scss";
import hinh from "../../assets/image/hinh9.png";
import hinh10 from "../../assets/image/hinh11.png";
import hinh12 from "../../assets/image/12.png";
import hinh13 from "../../assets/image/13.png";
import hinh14 from "../../assets/image/14.png";
import hinh15 from "../../assets/image/15.png";
import hinh16 from "../../assets/image/16.png";
import hinh17 from "../../assets/image/17.png";
import hinh18 from "../../assets/image/18.png";
import { useState } from "react";

const { Meta } = Card;
export default function HomeContent() {
  const visible = useSelector((state) => state.login.visible);
  const dispatch = useDispatch();
  const [open, isOpen] = useState(true);
  const handleClick = () => {
    dispatch(show());
  };
  const handleCancel = () => {
    dispatch(unshow());
  };
  const handleShow = () => {
    isOpen(!open);
  };
  console.log(visible);
  const tempArr = [
    { name: "RAM", price: 100, description: "Mo ta", img: hinh },
  ];
  return (
    <div className="container-1">
      <div className="container-2">
        <div className="container-3">
          <img src={hinh} className="hinh-body"></img>
        </div>
        <div className="container-4">
          <div className="boder-1">
            <p className="title-boder">Miễn phí vận chuyển</p>
            <h1 className="title-boder-1">
              100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
            </h1>
          </div>
          <div className="boder-1">
            <p className="title-boder">Bảo hành tận tâm</p>
            <h1 className="title-boder-1">
              100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
            </h1>
          </div>
          <div className="boder-1">
            <p className="title-boder">Đổi trả 1-1 hoặc hoàn tiền</p>
            <h1 className="title-boder-1">
              100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
            </h1>
          </div>
        </div>
      </div>
      <div className="container-5">
        <div className="container-6">
          <p className="title-container-6">Chỉ bán online</p>
          <img src={hinh10} className="hinh10" />
        </div>
        <div className="container-7">
          <p className="title-container-7">Thương hiệu nổi bật</p>
          <div className="container-8">
            <div className="img-bolder">
              <img src={hinh12} className="hinh" />
            </div>
            <div className="img-bolder">
              <img src={hinh13} className="hinh" />
            </div>
            <div className="img-bolder">
              <img src={hinh14} className="hinh14" />
            </div>
            <div className="img-bolder">
              <img src={hinh15} className="hinh15" />
            </div>
            <div className="img-bolder">
              <img src={hinh16} className="hinh16" />
            </div>
            <div className="img-bolder">
              <img src={hinh17} className="hinh17" />
            </div>
            <div className="img-bolder">
              <img src={hinh18} className="hinh" />
            </div>
          </div>
        </div>

        <div className="test-open" onClick={handleShow}>
          open
        </div>
        <div hidden={open}>
          content
          <p>Nhu cau</p>
        </div>
      </div>
      <div className="container-9">
        <div className="container-10">
          <p className="title-container-10">Tất cả Laptop</p>
          <UilFilter className="icon-filter" />
          <p className="title-icon-filter">Bộ Lọc</p>
        </div>
        <div className="container-11">
          <div className="container-12">Cơ Bản</div>
          <div className="container-13">Nâng Cao</div>
        </div>
      </div>
    </div>
  );
}
