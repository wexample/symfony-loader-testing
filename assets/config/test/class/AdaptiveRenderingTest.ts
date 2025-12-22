import AbstractTest from "./AbstractTest";

export default class AdaptiveRenderingTest extends AbstractTest {
  public getTestMethods() {
    return [
      this.testNonAdaptivePage,
      this.testAdaptivePage,
      this.testAdaptiveErrorMissingView,
    ];
  }

  async testNonAdaptivePage() {
    await this.fetchTestPageAdaptiveHtml(
      'VIEW',
      this.app.services.routing.path('_loader_testing_test_view')
    );
  }

  async testAdaptivePage() {
    // Load in html.
    await this.fetchTestPageAdaptiveHtml('ADAPTIVE');
  }

  private assertTestComponentAssets(
    el: HTMLElement,
    prefix: string = '',
    suffix: string = ''
  ) {
    this.assertEquals(
      getComputedStyle(
        this.app.layout.pageFocused.el.querySelector(
          `.test-component-test-css${suffix}`
        )
      ).backgroundColor,
      'rgb(0, 128, 0)',
      'The adaptive CSS has applied green on component'
    );

    this.assertEquals(
      getComputedStyle(
        this.app.layout.pageFocused.el.querySelector(
          `.test-component-test-js${suffix}`
        )
      ).backgroundColor,
      'rgb(0, 128, 0)',
      'The adaptive JS has applied green on component'
    );
  }

  private assertTestComponentIntegrity = (
    el: HTMLElement,
    prefix: string = '',
    suffix: string = ''
  ) => {
  };

  assertTestVueIntegrity(suffix: string = '') {
    this.assertTestComponentIntegrity(
      this.app.layout.pageFocused.el.querySelector(
        '.adaptive-page-test-vue'
      ) as HTMLElement,
      'test-vue',
      suffix ? `-${suffix}` : ''
    );
  }

  async assertVueUpdateSupportedByComponent() {
  }

  async testAdaptiveErrorMissingView() {
    await this.app.services.adaptive
      .get(this.app.services.routing.path('_loader_testing_test_error_missing_view'))
      .then(async () => {

      });
  }

  private fetchTestPageAdaptiveAjax() {
  }

  private fetchTestPageAdaptiveHtml(testString: string, path: string = undefined) {
  }
}
