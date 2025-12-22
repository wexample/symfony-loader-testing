import AbstractTest from "./AbstractTest";
import { LocaleRenderNodeMixin } from "@wexample/symfony-loader/js/Services/Mixins/Locale/LocaleRenderNodeMixin";

export default class TranslationTest extends AbstractTest {
  public getTestMethods() {
    return [this.testDefault];
  }

  public testDefault() {
    this.assertEquals(
      document.querySelector('#test-layout-translation').innerHTML,
      'TEST_LAYOUT_SERVER_TRANSLATION',
      'Initial layout server translation works'
    );

    const page = (this.app.layout.page as LocaleRenderNodeMixin as any);

    this.assertEquals(
      page.trans('@layout::string.client_side'),
      'CLIENT_SIDE_LAYOUT_TRANSLATION',
      'Layout translation is loaded in js'
    );

    this.assertEquals(
      page.trans('@page::secondGroup.first'),
      'First',
      'A simple translation is loaded in js'
    );

    this.assertEquals(
      page.trans('@page::firstGroup.third'),
      'Third',
      'A translations with the * wildcard is loaded in js'
    );
  }
}
