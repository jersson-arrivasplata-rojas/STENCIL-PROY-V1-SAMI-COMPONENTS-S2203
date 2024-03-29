import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-footer',
  styleUrl: 'footer.scss'
})
export class Footer {
  //@Element() el: HTMLElement;
  @Element() host: HTMLDivElement;
  children: Element[];
  class: string[] = [];
  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  //@Prop() class?: string = '';

  constructor() {
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
  
    this.children = Array.from(this.host.children);
    const samParagraph = (this.children.find(element => (element.tagName).toLowerCase() === 'sami-paragraph'));
    (samParagraph) ? samParagraph.slot = "footer" : null;

    
  }
  componentDidLoad() {

  }
  componentWillRender() {

    //this.host.innerHTML = '';
  }

  
  private getClass(): string {
    return this.class.join(' ');
  }
  render() {
    return (
      <footer class={`sami-footer ${this.getClass()}`}>
        <slot name="footer"/>
      </footer>
    );
  }

}