import Companies from 'components/Companies/Componies';
import Header from 'components/Header/Header';
import Popup from 'components/Popup/Popup';
import Preloader from 'components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import appStore from 'stores/app-store';
import './App.css';
import Splash from './components/Splash/Splash';

const App = observer(() => {
  const { companies, modalHidden, fetchData, isFetching } = appStore;

  let logoStatus: boolean = JSON.parse(sessionStorage.getItem("splashVisible") || 'true');

  const [visibleLogo, setVisibleLogo] = useState<boolean>(logoStatus);
  
  useEffect(() => {
    setTimeout(
      () => {
        setVisibleLogo(false)
        sessionStorage.setItem("splashVisible", "false");
      },3000
    )
  }, [])

  useEffect(() => {
    if (visibleLogo) return;
    fetchData();
  }, [visibleLogo])

  return (
    <>
      { 
        visibleLogo
        ? <Splash />
        : <>
            <div className='cover' hidden={modalHidden}></div>
            <Header />
            { 
              isFetching
                ? <Preloader />
                : companies.length === 0
                  ? <p className='message'>Нет компаний</p>
                  : <Companies />
            }
            {
              isFetching && companies.length > 0 && <Preloader />
            }
            <Popup />
          </>
      }
    </>
  )
});

export default App;
