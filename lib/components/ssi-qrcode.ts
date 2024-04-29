import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import QRCode from "qrcode";
import { GLOBAL_CSS } from "../styles/styles";

@customElement("ssi-qrcode")
export class QrCode extends LitElement {
  @property({ type: String }) content = "";

  @query("div") containerElement?: HTMLDivElement;
  @query("canvas") canvasElement?: HTMLCanvasElement;

  previousWidth?: number;

  async firstUpdated(): Promise<void> {
    this._renderQrCode();
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this._handleResize);
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this._handleResize);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div>
        <canvas></canvas>
      </div>
    `;
  }

  private _handleResize = () => {
    if (this.containerElement?.clientWidth !== this.previousWidth) {
      this.previousWidth = this.containerElement?.clientWidth;
      this._renderQrCode();
    }
  };

  private _renderQrCode = () => {
    QRCode.toCanvas(this.canvasElement, this.content, {
      width: this.containerElement?.clientWidth,
      margin: 0,
    });
  };

  static styles = css`
    ${GLOBAL_CSS}
  `;
}
