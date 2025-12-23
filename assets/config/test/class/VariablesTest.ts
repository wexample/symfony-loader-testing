import AbstractTest from "./AbstractTest";
import LayoutInterface from "@wexample/symfony-loader/js/Interfaces/RenderData/LayoutInterface";
import Component from "@wexample/symfony-loader/js/Class/Component";

export default class VariablesTest extends AbstractTest {
  public getTestMethods() {
    return [this.testVariables];
  }

  async testVariables() {
    this.assertEquals(
      this.app.layout.vars.initialLayoutVar,
      true,
      'Variable has proper value'
    );

    this.assertEquals(
      this.app.layout.page.vars.initialPageVar,
      true,
      'Initial page var is set'
    );

    this.assertTrue(
      typeof this.app.layout.page.vars.demoVariableBoolean === 'boolean',
      'Variable has proper value type'
    );

    this.assertTrue(
      typeof this.app.layout.page.vars.demoVariableInteger === 'number',
      'Variable int has proper value type'
    );

    this.assertTrue(
      typeof this.app.layout.page.vars.demoVariableFloat === 'number',
      'Variable float has proper value type'
    );

    this.assertTrue(
      typeof this.app.layout.page.vars.demoVariableObject === 'object',
      'Variable object has proper value type'
    );

    const component = this.app.layout.page.findChildRenderNodeByView(
      '@WexampleSymfonyLoaderBundle/components/test-component'
    ) as Component;

    this.fetchAdaptiveAjaxPage()
      .then((renderData: LayoutInterface) => {

      });
  }
}
