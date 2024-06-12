import { client } from "api/client";
import { makeAutoObservable } from "mobx";
import { ICompany } from "model/model";

class AppStore {
  companies: ICompany[] = [];
  modalHidden: boolean = true;
  modalMessage: string = '';
  isFetching: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = () => {
    this.isFetching = true;
    client.post('/getAllCompanies', {offset: 0, limit: 5})
    .then((res) => {
      this.companies = res.data.companies;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        this.modalHidden = !this.modalHidden;
        this.modalMessage = 'Ошибка авторизации';
      } else if (err.response.status === 400) {
        this.modalHidden = !this.modalHidden;
        this.modalMessage = err.message;
      } else if (err.response.status === 500) {
        this.modalHidden = !this.modalHidden;
        this.modalMessage = 'Всё упало';
      } else {
        this.modalHidden = !this.modalHidden;
        this.modalMessage = `Error ${err.response.status}: ${err.message}`;
      }
      return;
    })
    .finally(() => this.isFetching = false)
  }
  handleModal = (message: string) => {
    this.modalHidden = !this.modalHidden;
    this.modalMessage = message;
  }
}

export default new AppStore();