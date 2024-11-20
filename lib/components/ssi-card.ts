import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { GLOBAL_CSS } from "../styles/styles";

@customElement("ssi-card")
export class SsiCard extends LitElement {
  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    ${GLOBAL_CSS}

    .card {
      background: white;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
    }
  `;
}
