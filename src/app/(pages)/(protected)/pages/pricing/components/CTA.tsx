import Link from 'next/link'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <section className="section py-6 position-relative">
      <Container>
        <Row data-aos="fade-up">
          <Col className="text-center">
            <h1 className="display-5 fw-semibold">Still have a question?</h1>
            <p className="text-muted mx-auto">Explore your most suitable option below</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6}>
            <Card className="shadow-none border mb-lg-0 rounded-sm" data-aos="fade-up" data-aos-duration="500">
              <CardBody>
                <h3 className="mt-0 fw-semibold">Get in touch</h3>
                <p>Get in touch with our professional business development team and they&apos;ll answer your question shortly</p>
                <Link href="/pages/contact" className="btn btn-outline-primary mt-4">
                  Contact Us
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="shadow-none border mb-0 rounded-sm" data-aos="fade-up" data-aos-duration="1000">
              <CardBody>
                <h3 className="mt-0 fw-semibold">Explore Knowledge Base</h3>
                <p>Learn more about all the features and functionality from our detailed knowledge base.</p>
                <Link href="/pages/contact" className="btn btn-outline-primary mt-4">
                  Explore
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
