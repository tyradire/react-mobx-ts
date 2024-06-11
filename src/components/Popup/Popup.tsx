import { observer } from 'mobx-react-lite';
import appStore from 'stores/app-store';
import './popup.css';
import '../UI/ui.css';

const Popup = observer(() => {
  const { modalHidden, modalMessage, handleModal } = appStore;

  const closePopup = () => {
    handleModal('');
  }

  return (
    <>
    <div id="popup" className={modalHidden ? 'popup' : 'popup popup_opened'}>
      <p className='popup__message'>{modalMessage}</p>
      <button className='btn btn-accept' onClick={closePopup}>Хорошо</button>
    </div>
    </>
  )
});

export default Popup