import Page from '@wexample/symfony-loader/js/Class/Page';
import ModalsService from '@wexample/symfony-loader/js/Services/ModalsService';
import AppService from '@wexample/symfony-loader/js/Class/AppService';
import ServicesRegistryInterface from '@wexample/symfony-loader/js/Interfaces/ServicesRegistryInterface';

export default class extends Page {
  services: ServicesRegistryInterface;

  getPageLevelMixins(): typeof AppService[] {
    return [ModalsService];
  }

  async pageReady() {
    this.el
      .querySelector('.open-another-modal')
      .addEventListener('click', () => {
        (this.app.getService(ModalsService) as ModalsService)
          .get('/_loader/demo/loading-fetch-simple');
      });
  }
}
