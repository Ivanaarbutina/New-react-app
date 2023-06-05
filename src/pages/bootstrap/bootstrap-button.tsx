import { Button, Alert } from "react-bootstrap";
import { useState, useEffect} from "react";

const BootstrapButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if(showAlert) {
      const timeoutId = setTimeout (() => {
        setShowAlert(false);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }},[showAlert]);
      
  
  
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
      setShowAlert(true);
    };
  return(
        <div className="containerbs">
          <h2>Button / Alert</h2>
          <Button onClick={handleClick}>Click me</Button>
          {showAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
              className="bootstrap__alert"
            >
              <Alert.Heading>Kliknuo si me!</Alert.Heading>
            </Alert>
          )}
        </div>
  )
}
export default BootstrapButton;