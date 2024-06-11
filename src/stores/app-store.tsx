import { makeAutoObservable } from "mobx";
import { ICompany, ServerResponse } from "model/model";

class AppStore {
  companies: ICompany[] = [];
  modalHidden: boolean = true;
  modalMessage: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  getAllCards = (value: ServerResponse) => {
    this.companies = value.data.companies;
  }
  handleModal = (message: string) => {
    this.modalHidden = !this.modalHidden;
    this.modalMessage = message;
  }
}

export default new AppStore();