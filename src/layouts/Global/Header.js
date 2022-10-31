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
} from "@iconscout/react-unicons";
import { Button, Carousel, Col, Input, Row, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { show } from "../../components/Login/LoginSlice";
import logo from "../../assets/image/logo2.png";
import "./header.scss";
const { Search } = Input;
const suffix = (
  <UilSearch
    style={{
      fontSize: 16,
      color: "yellow",
    }}
  />
);
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    dispatch(show());
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "10px",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <header className="the-header">
      <div className="flex-1">
        <div className="flex-2">
          <a href="/" aria-label="Asicss logo" class="logo-link-active">
            <img src={logo} class="icon-sprite-layout"></img>
          </a>
          <div className="btn-group-catalog">
            <div className="flex_3">
              <button aria-label="Đóng danh mục" className="btn-icon-default">
                <UilBars className="icon-menu" />
              </button>
              <p className="danhmuc">Danh mục</p>
              <p className="khuyenmai">Khuyến mãi</p>
            </div>
          </div>
          <div className="search-div">
            <UilSearch className="icon-search" />
            <input
              className="search"
              placeholder="Tên sản phẩm, nhu cầu, hãng"
            />
          </div>
          <div className="item-center">
            <button aria-label="Giỏ hàng" className="cart">
              <UilShoppingCart className="icon-cart" /> <span>0</span>
            </button>
            <button aria-label="Vận chuyển " className="truck">
              <UilTruck className="icon-truck" />
            </button>
            <button aria-label="đăng nhập" className="user">
              <UilUser className="icon-user" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
