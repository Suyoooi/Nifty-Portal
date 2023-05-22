import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <nav id="mainnav-container" className="mainnav">
        <div className="mainnav__inner">
          <div className="mainnav__top-content scrollable-content pb-5">
            <div className="mainnav__profile mt-3 d-flex3">

              <div className="mt-2 d-mn-max"></div>
              {/* <div className="mininav-toggle text-center py-2">
                <img className="mainnav__avatar img-md rounded-circle border" src="./assets/img/profile-photos/1.png" alt="Profile Picture">
              </div> */}
            </div>

            <div className="mainnav__categoriy py-3">
              <h6 className="mainnav__caption mt-0 px-3 fw-bold">Portal</h6>
              <ul className="mainnav__menu nav flex-column">
                <li className="nav-item has-sub">
                  <Link href="#" className="mininav-toggle nav-link active">
                    <span className="nav-label ms-1">시스템</span>
                  </Link>

                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/portal/srvr" className="nav-link active">서버관리</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/portal/mber" className="nav-link">사용자 관리</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-sub">
                  <Link href="#" className="mininav-toggle nav-link">
                    <span className="nav-label ms-1">알림</span>
                  </Link>

                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/noti" className="nav-link">알림 이력</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-sub">
                  <Link href="#" className="mininav-toggle nav-link">
                    <span className="nav-label ms-1">로그</span>
                  </Link>

                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/logs" className="nav-link">로그 이력</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mainnav__categoriy py-3">
              <h6 className="mainnav__caption mt-0 px-3 fw-bold">Multi Level</h6>
              <ul className="mainnav__menu nav flex-column">
                <li className="nav-item has-sub">

                  <a href="#" className="mininav-toggle nav-link collapsed"><i className="pli-tactic fs-5 me-2"></i>
                    <span className="nav-label ms-1">Menu Levels</span>
                  </a>

                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Menu Link</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Menu Link</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Menu Link</a>
                    </li>
                    <li className="nav-item has-sub">
                      <a href="#" className="mininav-toggle nav-link collapsed">Submenu</a>
                      <ul className="mininav-content nav collapse">
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item has-sub">
                      <a href="#" className="mininav-toggle nav-link collapsed">Submenu</a>
                      <ul className="mininav-content nav collapse">
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Menu Link</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </li>
              </ul>
            </div>

            <div className="mainnav__profile">

              <div className="mininav-toggle text-center py-2 d-mn-min">
                <i className="pli-monitor-2"></i>
              </div>

              <div className="d-mn-max mt-5"></div>

              <div className="mininav-content collapse d-mn-max">
                <h6 className="mainnav__caption px-3 fw-bold">Server Status</h6>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item text-reset">
                    <div className="d-flex justify-content-between align-items-start">
                      <p className="mb-2 me-auto">CPU Usage</p>
                      <span className="badge bg-info rounded">35%</span>
                    </div>
                    <div className="progress progress-md">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '35%' }} aria-label="CPU Progress" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </li>
                  <li className="list-group-item text-reset">
                    <div className="d-flex justify-content-between align-items-start">
                      <p className="mb-2 me-auto">Bandwidth</p>
                      <span className="badge bg-warning rounded">73%</span>
                    </div>
                    <div className="progress progress-md">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '73%' }} aria-label="Bandwidth Progress" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </li>
                </ul>
                <div className="d-grid px-3 mt-3">
                  <a href="#" className="btn btn-sm btn-success">View Details</a>
                </div>
              </div>
            </div>

          </div>
          <div className="mainnav__bottom-content border-top pb-2">
            <ul id="mainnav" className="mainnav__menu nav flex-column">
              <li className="nav-item has-sub">
                <a href="#" className="nav-link mininav-toggle collapsed" aria-expanded="false">
                  <i className="pli-unlock fs-5 me-2"></i>
                  <span className="nav-label ms-1">Logout</span>
                </a>
                <ul className="mininav-content nav flex-column collapse">
                  <li className="nav-item">
                    <a href="#" className="nav-link">This device only</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">All Devices</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Lock screen</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Sidebar;
