import './companies.css';
import Company from 'components/Company/Company';
import { observer } from 'mobx-react-lite';
import appStore from 'stores/app-store';

const Companies = observer(() => {
  const { companies } = appStore;

  return (
      <ul className='companies'>
        {
          companies.map(company => <Company 
              id={company.company.companyId} 
              customer={company.customerMarkParameters} 
              dashboard={company.mobileAppDashboard} 
              key={company.company.companyId} />
            )
        }
      </ul>
  )
});

export default Companies