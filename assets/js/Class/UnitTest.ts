import AppChild from "@wexample/js-app/Common/AppChild";
import App from "@wexample/symfony-loader/js/Class/App";

export default abstract class extends AppChild {
  public app: App

  assertEquals(value: any, expected: any, message?: string, fatal: boolean = true) {
    const styleDefault = 'border-radius:10rem;';
    const resolvedMessage = message ?? expected;
    const isEqual = value === expected;
    const errorMessage = `Assertion failed, ${value} is not equal to expected value : ${expected}. ${resolvedMessage || ''}`;

    const logArgs: [string, string, string] = isEqual
      ? [
        '%c Success ',
        `background: #00FF00; color: #002200; ${styleDefault}`,
        `${resolvedMessage}`,
      ]
      : [
        '%c Fail ',
        `background: #FFCCCC; color: #880000; ${styleDefault}`,
        errorMessage,
      ];

    console.log(...logArgs);

    if (!isEqual && fatal) {
      throw new Error(errorMessage);
    }
  }

  assertTrue(value: boolean, message?: string) {
    this.assertEquals(value, true, message);
  }

  assertFalse(value: boolean, message?: string) {
    this.assertEquals(value, false, message);
  }

  public init() {
    // To override.
  }

  public abstract getTestMethods(): Array<() => void | Promise<void>>;
}
