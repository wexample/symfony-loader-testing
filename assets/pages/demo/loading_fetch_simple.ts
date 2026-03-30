import Page from '@wexample/symfony-loader/js/Class/Page';
import ModalService from '@wexample/symfony-loader/js/Services/ModalService';
import AppService from '@wexample/symfony-loader/js/Class/AppService';
import ServicesRegistryInterface from '@wexample/symfony-loader/js/Interfaces/ServicesRegistryInterface';

export default class extends Page {
  services: ServicesRegistryInterface;

  getPageLevelMixins(): typeof AppService[] {
    return [ModalService];
  }

  async pageReady() {
    this.el
      .querySelector('.open-another-modal')
      .addEventListener('click', () => {
        (this.app.getService(ModalService) as ModalService)
          .get('/_loader/demo/loading-fetch-simple');
      });
  }
}
