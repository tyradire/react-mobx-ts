import { ICustomerMarkParameters, IMobileAppDashboard } from 'model/model';
import { GlobalSvgSelector } from 'assets/global/GlobalSvgSelector';
import appStore from 'stores/app-store';
import { observer } from 'mobx-react-lite';
import './company.css';
import '../UI/ui.css';

const Company = observer(({id, customer, dashboard}: {id: string, customer: ICustomerMarkParameters, dashboard: IMobileAppDashboard}) => {
  const { handleModal } = appStore;

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleModal(`Нажата кнопка ${e.currentTarget.value}, ID компании: ${id}`);
  }

  return (
    <li className='company' style={{backgroundColor: dashboard.cardBackgroundColor}}>
      <div className='company__heading'>
        <h3 className='company__name' style={{color: dashboard.highlightTextColor}}>
          {dashboard.companyName}
        </h3>
        <img className='company__logo' src={dashboard.logo} />
      </div>
      <p className='company__bonus' style={{color: dashboard.textColor}}>
        <span className='company__bonus_value' style={{color: dashboard.highlightTextColor}}>{customer.loyaltyLevel.requiredSum}</span>
        баллов
      </p>
      <div className='company__cashback'>
        <div className='company__cashback-col'>
          <p className='company__cashback-subtitle' style={{color: dashboard.textColor}}>Кешбэк</p>
          <p className='company__cashback-value'>{customer.loyaltyLevel.number}%</p>
        </div>
        <div className='company__cashback-col'>
          <p className='company__cashback-subtitle' style={{color: dashboard.textColor}}>Уровень</p>
          <p className='company__cashback-value'>{customer.loyaltyLevel.name}</p>
        </div>
      </div>
      <div className='company__controls'>
        <button className='btn btn-icon' type="button" value="Просмотр" onClick={(e) => openModal(e)}>
          <GlobalSvgSelector type='eye' color={dashboard.mainColor}/>
        </button>
        <button className='btn btn-icon' type="button" value="Удалить" onClick={(e) => openModal(e)}>
          <GlobalSvgSelector type='trashcan' color={dashboard.accentColor}/>
        </button>
        <button className='btn btn-details' type="button" value="Подробнее" style={{backgroundColor: dashboard.backgroundColor, color: dashboard.mainColor}} onClick={(e) => openModal(e)}>Подробнее</button>
      </div>
    </li>
  )
});

export default Company;