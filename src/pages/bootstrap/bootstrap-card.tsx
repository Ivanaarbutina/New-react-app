import { Card, ProgressBar } from "react-bootstrap";

const BootstrapCard = () => {
  return (
    <div>
       <Card className="bootstrap__cards">
                    <Card.Body>
                      <div className="bootstrap__boxs">
                        <span className="bootstrap__numb">45</span>
                        <div>
                          <p>Ovo je neki text</p>
                          <p>koji nesto objasnjava</p>
                        </div>
                      </div>
                      <ProgressBar striped variant="info" animated now={20} />
                    </Card.Body>
                  </Card>
    </div>
  )
}

export default BootstrapCard;