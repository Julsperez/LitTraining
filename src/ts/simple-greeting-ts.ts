import { css, html, LitElement } from 'Lit';
import { customElement, property } from 'lit/decorators';

@customElement('simple-greeting-ts')
export class SimpleGreetingTs extends LitElement {
    
    static styles = css `p { color: red; }`

    @property()
    name = 'Bruce Wayne'
    
    render() {
        return html`
            <p>Hello, ${this.name}</p>
        `;
    }

}