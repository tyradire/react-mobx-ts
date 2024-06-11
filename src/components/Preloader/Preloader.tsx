import Spinner from "components/UI/Spinner";
import './preloader.css';

function Preloader() {

  return (
      <div className="preloader">
        <Spinner />
        <p className="preloader__message">Подгрузка команий</p>
      </div>
  )
}

export default Preloader