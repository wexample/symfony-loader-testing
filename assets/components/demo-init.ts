import Component from '@wexample/symfony-loader/js/Class/Component';

export default class extends Component {
  async mounted() {
    await super.mounted();

    this.el.innerHTML = `<span class="success">✅</span>${this.el.innerHTML}`;
  }
}
