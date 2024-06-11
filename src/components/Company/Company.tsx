import './company.css';
import '../UI/ui.css';
import { ICustomerMarkParameters, IMobileAppDashboard } from 'model/model';
import { useState } from 'react';
import { GlobalSvgSelector } from 'assets/global/GlobalSvgSelector';
import appStore from 'stores/app-store';
import { observer } from 'mobx-react-lite';

const Company = observer(({id, customer, dashboard}: {id: string, customer: ICustomerMarkParameters, dashboard: IMobileAppDashboard}) => {
  const { handleModal } = appStore;

  const [bonusData, setBonusData] = useState<ICustomerMarkParameters>(customer);
  const [companyData, setCompanyData] = useState<IMobileAppDashboard>(dashboard);

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleModal(`Нажата кнопка ${e.currentTarget.value}, ID компании: ${id}`);
  }

  return (
    <li className='company' style={{backgroundColor: companyData.cardBackgroundColor}}>
      <div className='company__heading'>
        <h3 className='company__name' style={{color: companyData.highlightTextColor}}>
          {companyData.companyName}
        </h3>
        <img className='company__logo' src={companyData.logo} />
      </div>
      <p className='company__bonus' style={{color: companyData.textColor}}>
        <span className='company__bonus_value' style={{color: companyData.highlightTextColor}}>{bonusData.loyaltyLevel.requiredSum}</span>
        баллов
      </p>
      <div className='company__cashback'>
        <div className='company__cashback-col'>
          <p className='company__cashback-subtitle' style={{color: companyData.textColor}}>Кешбэк</p>
          <p className='company__cashback-value'>{bonusData.loyaltyLevel.number}%</p>
        </div>
        <div className='company__cashback-col'>
          <p className='company__cashback-subtitle'>Уровень</p>
          <p className='company__cashback-value'>{bonusData.loyaltyLevel.name}</p>
        </div>
      </div>
      <div className='company__controls'>
        <button className='btn btn-icon' type="button" value="Просмотр" onClick={(e) => openModal(e)}>
          <GlobalSvgSelector type='eye' color={companyData.mainColor}/>
        </button>
        <button className='btn btn-icon' type="button" value="Удалить" onClick={(e) => openModal(e)}>
          <GlobalSvgSelector type='trashcan' color={companyData.accentColor}/>
        </button>
        <button className='btn btn-details' type="button" value="Подробнее" style={{backgroundColor: companyData.backgroundColor, color: companyData.mainColor}} onClick={(e) => openModal(e)}>Подробнее</button>
      </div>
    </li>
  )
});

export default Company;