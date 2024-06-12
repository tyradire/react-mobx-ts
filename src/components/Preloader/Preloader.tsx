import Spinner from "components/UI/Spinner";
import './preloader.css';

function Preloader() {

  return (
      <div className="preloader">
        <Spinner />
        <p className="message">Подгрузка компаний</p>
      </div>
  )
}

export default Preloader