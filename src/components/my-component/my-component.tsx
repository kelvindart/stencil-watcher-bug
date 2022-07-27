import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Immutable property
   */
  @Prop() myVar: string = 'foo';

  /**
   * Watch for any changes on myVar
   */
  @Watch('myVar')
  watchMyVarHandler(newVal: string, oldVal: string): void {
    console.log('---watchMyVarHandler START---');
    console.log(newVal, oldVal);
    console.log('---watchMyVarHandler END---');
  }

  mutateImmutable(newVal: string): void {
    this.myVar = newVal;
  }

  render() {
    return [<div>{this.myVar}</div>, <button onClick={() => this.mutateImmutable(`${Date.now()}`)}>Mutate</button>];
  }
}
