import AbstractTest from "./AbstractTest";

export default class ResponsiveTest extends AbstractTest {
  responsiveActivationWaitDuration: number = 20;
  responsiveSizes: string[];

  public getTestMethods() {
    return [
      this.testDefault,
    ];
  }

  public init() {
    super.init()

    this.responsiveSizes = Object.keys(this.app.layout.vars.displayBreakpoints);
  }

  resetPageResponsiveSizesCounters() {
    this.app.layout.page.vars.responsiveSizesCounters = {};
    this.responsiveSizes.forEach((size: string) => {
      this.app.layout.page.vars.responsiveSizesCounters[size] = 0;
    });
  }

  async testDefault() {
    this.assertTrue(
      document
        .getElementById('layout-initial')
        .classList.contains(
        `responsive-${this.app.layout.responsiveSizeCurrent}`
      ),
      `The default responsive size of "responsive-${this.app.layout.responsiveSizeCurrent}" has been applied to layout body`
    );
  }
}
