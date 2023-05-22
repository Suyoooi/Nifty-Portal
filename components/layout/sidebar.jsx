"use client";
// This is a client component 👈🏽

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TIBCO_SERVER_EMS_LIST = [
  { title: "EMS 서버 관리", url: "/tibco/ems/emsSrvr" },
  { title: "EMS 서버 이력 조회", url: "/tibco/ems/emsSrvrHst" },
  { title: "EMS 속성 조회", url: "/tibco/ems/emsProperty" },
  { title: "EMS Queue/Topic 추가", url: "/tibco/ems/emsQueue" },
  { title: "EMS 서비스 조회", url: "/tibco/ems/emsService" },
  { title: "EMS 서비스 이력 조회", url: "/tibco/ems/emsServiceHst" },
];

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  // const handleButtonClick = (e) => {
  //   console.log(isOpen);
  //   setIsOpen(!isOpen);

  // };

  return (
    <>
      <nav id="mainnav-container" className="mainnav">
        <div className="mainnav__inner">
          <div className="pb-5 mainnav__top-content scrollable-content">
            <div className="py-3 mainnav__categoriy">
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className="px-3 mt-0 mainnav__caption fw-bold">TIBCO</h4>
                <img src="/img/icon/vector.png" style={{ width: 20, height: 20, cursor: "pointer" }} />
              </div> */}
              {/* <h5 className="px-3 mt-0 mainnav__caption fw-bold">
                <img src="/img/icon/tibcoServer.png"
                  style={{ width: 16, height: 16 }}
                />
                TIBCO 서버
              </h5> */}
              <h6 className="mainnav__caption mt-0 px-3 fw-bold">TIBCO</h6>
              <ul className="mainnav__menu nav flex-column">
                <li className="nav-item has-sub">
                  <Link href="#" className="nav-link">
                    <Image
                      src="/assets/img/icon/tibcoServer.png"
                      alt="TIBCO Server"
                      width={16}
                      height={16}
                    />
                    <span className="nav-label ms-1">TIBCO 서버 관리</span>
                  </Link>
                </li>

                <li className="nav-item has-sub">
                  <Link href="#" className="mininav-toggle nav-link collapsed">
                    <Image
                      src="/assets/img/icon/ems.png"
                      alt="EMS Server"
                      width={16}
                      height={16}
                    />
                    <span className="nav-label ms-1">EMS</span>
                  </Link>

                  <ul className="mininav-content nav collapse">
                    {TIBCO_SERVER_EMS_LIST.map((data) => (
                      <li className="nav-item" key={data.title}>
                        <a
                          href={data.url}
                          className="nav-link mininav-toggle collapsed"
                        >
                          <i className="pli-home fs-5 me-2"></i>
                          <span
                            className="nav-label mininav-content ms-1"
                            style={{ color: "#666666" }}
                          >
                            {data.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="py-3 mainnav__categoriy">
              <h6 className="px-3 mt-0 mainnav__caption fw-bold">Submenus</h6>
              <ul className="mainnav__menu nav flex-column">
                {/* <li className="nav-item has-sub">
                  <a href="#" className="mininav-toggle nav-link">
                    <i className="pli-data-center fs-5 me-2"></i>
                    <span className="nav-label ms-1">Submenu</span>
                  </a>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Submenu Items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Submenu Items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Submenu Items
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item has-sub">
                  <a href="#" className="mininav-toggle nav-link active">
                    <i className="pli-idea fs-5 me-2"></i>
                    <span className="nav-label ms-1">Active Item</span>
                  </a>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Submenu Items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        Active state
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Submenu Items
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Bottom navigation menu --> */}
          <div className="pb-2 mainnav__bottom-content border-top">
            <ul id="mainnav" className="mainnav__menu nav flex-column">
              <li className="nav-item has-sub">
                <a
                  href="#"
                  className="nav-link mininav-toggle collapsed"
                  aria-expanded="false"
                >
                  <i className="pli-unlock fs-5 me-2"></i>
                  <span className="nav-label ms-1">Logout</span>
                </a>
                <ul className="mininav-content nav flex-column collapse">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      This device only
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      All Devices
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Lock screen
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- End - Bottom navigation menu --> */}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
