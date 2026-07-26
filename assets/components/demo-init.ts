import Component from '@wexample/symfony-loader/js/Class/Component';

export default class extends Component {
  async mounted() {
    await super.mounted();

    const status = document.createElement('span');
    status.className = 'status status--success';
    status.textContent = '✓ Component loaded';
    this.el.prepend(status);
  }
}
