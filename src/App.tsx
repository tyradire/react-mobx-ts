import Companies from 'components/Companies/Componies';
import Header from 'components/Header/Header';
import Popup from 'components/Popup/Popup';
import Preloader from 'components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import appStore from 'stores/app-store';
import './App.css';
import Splash from './components/Splash/Splash';
import data from './data/data.ts';

const App = observer(() => {
  const { companies, modalHidden, getAllCards } = appStore;

  const [visibleLogo, setVisibleLogo] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(
      () => {setVisibleLogo(false)},3000
    )

  }, [])

  useEffect(() => {
    if (visibleLogo) return;
    getAllCards(data);
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

              companies.length === 0
                ? <Preloader />
                : <Companies />

            }
            <Popup />
          </>
      }
    </>
  )
});

export default App;
