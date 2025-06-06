import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="position-relative hero-5 pb-4 pt-7 pb-sm-0 hero-with-shapes">
      <div className="shape1" />
      <div className="shape2" />
      <div className="shape3" />
      <Container className="position-relative zindex-1">
        <Row className="align-items-center">
          <Col lg={12}>
            <div
              className="rounded d-inline-block mb-4 px-3 py-2 alert bg-soft-warning aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration={1000}>
              <Link href="">
                <div className="d-flex align-items-center">
                  <div className="badge rounded-pill bg-orange px-2 py-1">UI/UX Designer</div>
                  <div className="mx-3">Turning ideas into clean, user-friendly designs </div>
                </div>
              </Link>
            </div>
            <h1 className="hero-title fw-medium">
              I design experiences that connect<span className="highlight highlight-warning d-inline-block">works</span>
            </h1>
            <p className="mt-4 fs-18 mb-3 mb-sm-6 w-75">
            I&apos;m a passionate UI/UX designer focused on turning ideas into intuitive, engaging, and visually compelling digital products. From wireframes to final polish, I craft user-centered designs that solve problems and elevate brands.
            </p>
            {/* <Button variant="secondary">
              <IconifyIcon icon="lucide:arrow-down" className="icon-xxs me-2" /> View Our Work
            </Button> */}
            {/* <Button variant="outline-secondary" className="ms-2">
              Learn More
            </Button> */}
          </Col>
        </Row>
      </Container>
      {/* <div className="align-items-end links-social d-sm-block d-none">
        <ul className="list-inline text-muted text-uppercase fw-medium">
          <li className="list-inline-item py-2">
            <Link href="">Twitter</Link>
          </li>
          <li className="list-inline-item py-2">
            <Link href="">Facebook</Link>
          </li>
          <li className="list-inline-item py-2">
            <Link href="">Instagram</Link>
          </li>
        </ul>
      </div> */}
      <div className="shape bottom">
        <svg
          width="1440px"
          height="40px"
          viewBox="0 0 1440 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="shape-b" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="curve" fill="#fff">
              <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
export default Hero
