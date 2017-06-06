import Component, { tracked } from '@glimmer/component';

export default class ParisAgreement extends Component {
  @tracked countriesInAgreement = [];
  @tracked countriesNotInAgreement = [];
  @tracked newCountry: string = '';

  updateNewCountry(event) {
    this.newCountry = event.target.value.trim();
  }

  addCountry() {
    let newList = [
      ...this.countriesInAgreement,
      this.newCountry
    ]

    this.countriesInAgreement = newList;
    this.newCountry = '';
  }

  removeCountry(country: string) {
    let newList = this.countriesInAgreement.filter(c => c!== country);

    this.countriesInAgreement = newList;

    let newerList = [
      ...this.countriesNotInAgreement,
      country
    ]

    this.countriesNotInAgreement = newerList;
  }
};
