import Component from '@glimmer/component';

export default class RemoveCountry extends Component {
  removeCountry() {
    let country = this.args.country;

    this.args.removeCountry(country);
  }
};
