import App from '@wexample/symfony-loader/js/Class/App';
import AppService from '@wexample/symfony-loader/js/Class/AppService';
import VueService from '@wexample/symfony-loader/js/Services/VueService';

export default class extends App {
  getServices(): (typeof AppService | [typeof AppService, any[]])[] {
    return [...super.getServices(), ...[VueService]];
  }
}
