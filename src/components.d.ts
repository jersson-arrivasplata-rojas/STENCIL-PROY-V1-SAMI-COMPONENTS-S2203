/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SamiCardCode {
        "author"?: string;
        "authorEmail"?: string;
        "authorFontSize"?: string;
        "backgroundColor"?: string;
        "backgroundImage"?: string;
        "box"?: boolean;
        "contentSubtitle"?: string;
        "contentSubtitleFontSize"?: string;
        "contentTitle"?: string;
        "contentTitleFontSize"?: string;
        "directionRight"?: boolean;
        "flexDirection"?: string;
        "identify"?: string;
        "marginTop"?: string;
        "paddingLeft"?: string;
        "paddingRight"?: string;
        "preview"?: boolean;
        "subtitleImage"?: string;
        "subtitleImageFontSize"?: string;
        "titleImage"?: string;
        "titleImageFontSize"?: string;
        "type"?: string;
    }
    interface SamiCardImage {
        /**
          * es: Sub título del card image en: Subtitle of card image Example: Css3
         */
        "backgroundImage": string;
        /**
          * es: Sub título del card image en: Subtitle of card image Example: Css3
         */
        "cardSubtitle": string;
        "cardTag"?: HTMLElement;
        /**
          * es: Título del card image en: Title of card image Example: Estilos
         */
        "cardTitle": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url": string;
    }
    interface SamiCardTag {
        /**
          * es: Fondo del Tag en: Background of Tag Example: #000
         */
        "background"?: string;
        /**
          * es: Radio del borde del Tag en: Border Radius of Tag Example: none
         */
        "borderRadius"?: string;
        /**
          * es: Posición de Abajo del Tag en: Position Bottom of Tag Example: bolder
         */
        "bottom"?: number;
        /**
          * es: Transición del Tag en: Transition of Tag Example: filter 200ms linear, transform 200ms linear
         */
        "class"?: string;
        /**
          * es: Color del Tag en: Color of Tag Example: 1
         */
        "color"?: string;
        /**
          * es: Estilo de Pso del texto del Tag en: Font Weigth about text of Tag Example: #fff
         */
        "fontWeight"?: string;
        /**
          * es: Alto del Tag en: Height of Tag Example: 40px
         */
        "height"?: string;
        /**
          * es: Posición Izquierda del Tag en: Position Left of Tag Example: 0px
         */
        "left"?: string;
        /**
          * es: Alto de la linea de texto del Tag en: Line Height of Tag Example: center
         */
        "lineHeight"?: number;
        /**
          * es: Posición del Tag en: Position of Tag Example: #fff
         */
        "position"?: string;
        /**
          * es: Posición Derecha del Tag en: Position Right of Tag Example: 0px
         */
        "right"?: number;
        /**
          * es: Texto del Tag en: Text of Tag Example: #fff
         */
        "text"?: string;
        /**
          * es: Alineamiento de texto del Tag en: Text Align of Tag Example: 2
         */
        "textAlign"?: string;
        /**
          * es: Posición de Abajo del Tag en: Position Bottom of Tag Example: bolder
         */
        "top"?: number;
        /**
          * es: Transición del Tag en: Transition of Tag Example: filter 200ms linear, transform 200ms linear
         */
        "transition"?: string;
        /**
          * es: Ancho del Tag en: Width of Tag Example: absolute
         */
        "width"?: string;
        /**
          * es: z-index del Tag en: z-index of Tag Example: 25px
         */
        "zIndex"?: number;
    }
    interface SamiFlexCode {
    }
    interface SamiFlexCodeView {
        "carousel": boolean;
        "identify"?: string;
    }
    interface SamiGrid {
        "padding"?: string;
    }
    interface SamiHeaderMobile {
        "hyperlinkBackground": string;
        "hyperlinkBackgroundImage": string;
        "hyperlinkBorderRadius": string;
        "hyperlinkHeight": string;
        "hyperlinkMaxWidth": string;
        "hyperlinkTarget": string;
        "hyperlinkUrl": string;
        "hyperlinkWidth": string;
    }
    interface SamiHyperlink {
        "fnClick"?: () => void;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "target": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "text": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url": string;
    }
    interface SamiHyperlinkIcon {
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "filter"?: string;
        "fnClick"?: () => void;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "height": number;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "target": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "type": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url": string;
        "urlImage": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "width": number;
    }
    interface SamiHyperlinkImage {
        "background"?: string;
        "backgroundImage"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "maxWidth"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "refFunction"?: () => void;
        "target": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "text": string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url": string;
        "width"?: string;
    }
    interface SamiListGroup {
        "classAppend": string;
        /**
          * @State () data: Array<{ url: string; type: string; }> = [];  es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "data": Array<{
    url: string;
    text: string;
    padding: string;
    target: string;
    fnClick?: () => void;
  }>;
        "flexDirection"?: string;
        "width"?: string;
    }
    interface SamiListSocialMedia {
        "classAppend": string;
        /**
          * @State () data: Array<{ url: string; type: string; }> = [];  es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "data": Array<{
    url: string;
    type: string;
    padding: string;
    target: string;
    urlImage: string;
    fnClick?: () => void;
  }>;
        "filter"?: string;
        "flexDirection"?: string;
    }
    interface SamiLoader {
        "close": () => Promise<void>;
        "show": () => Promise<void>;
    }
    interface SamiMain {
        "marginLeft"?: string;
    }
    interface SamiSidebar {
        "background"?: string;
        "boxShadow"?: string;
        "height"?: string;
        "hyperlinkFilter"?: string;
        "hyperlinkPadding"?: string;
        "hyperlinkUrl"?: string;
        "hyperlinkUrlImage"?: string;
        "maxWidth"?: string;
        "position"?: string;
        "top"?: number;
        "width"?: string;
        "zIndex"?: number;
    }
    interface SamiSubscriber {
        "background"?: string;
        "boxShadow"?: string;
        "height"?: string;
        "hyperlinkFilter"?: string;
        "hyperlinkIconHeight"?: number;
        "hyperlinkIconPadding"?: string;
        "hyperlinkIconUrlImage"?: string;
        "hyperlinkIconWidth"?: number;
        "hyperlinkPadding"?: string;
        "hyperlinkText"?: string;
        "hyperlinkUrl"?: string;
        "maxWidth"?: string;
        "position"?: string;
        "top"?: number;
        "width"?: string;
        "zIndex"?: number;
    }
}
declare global {
    interface HTMLSamiCardCodeElement extends Components.SamiCardCode, HTMLStencilElement {
    }
    var HTMLSamiCardCodeElement: {
        prototype: HTMLSamiCardCodeElement;
        new (): HTMLSamiCardCodeElement;
    };
    interface HTMLSamiCardImageElement extends Components.SamiCardImage, HTMLStencilElement {
    }
    var HTMLSamiCardImageElement: {
        prototype: HTMLSamiCardImageElement;
        new (): HTMLSamiCardImageElement;
    };
    interface HTMLSamiCardTagElement extends Components.SamiCardTag, HTMLStencilElement {
    }
    var HTMLSamiCardTagElement: {
        prototype: HTMLSamiCardTagElement;
        new (): HTMLSamiCardTagElement;
    };
    interface HTMLSamiFlexCodeElement extends Components.SamiFlexCode, HTMLStencilElement {
    }
    var HTMLSamiFlexCodeElement: {
        prototype: HTMLSamiFlexCodeElement;
        new (): HTMLSamiFlexCodeElement;
    };
    interface HTMLSamiFlexCodeViewElement extends Components.SamiFlexCodeView, HTMLStencilElement {
    }
    var HTMLSamiFlexCodeViewElement: {
        prototype: HTMLSamiFlexCodeViewElement;
        new (): HTMLSamiFlexCodeViewElement;
    };
    interface HTMLSamiGridElement extends Components.SamiGrid, HTMLStencilElement {
    }
    var HTMLSamiGridElement: {
        prototype: HTMLSamiGridElement;
        new (): HTMLSamiGridElement;
    };
    interface HTMLSamiHeaderMobileElement extends Components.SamiHeaderMobile, HTMLStencilElement {
    }
    var HTMLSamiHeaderMobileElement: {
        prototype: HTMLSamiHeaderMobileElement;
        new (): HTMLSamiHeaderMobileElement;
    };
    interface HTMLSamiHyperlinkElement extends Components.SamiHyperlink, HTMLStencilElement {
    }
    var HTMLSamiHyperlinkElement: {
        prototype: HTMLSamiHyperlinkElement;
        new (): HTMLSamiHyperlinkElement;
    };
    interface HTMLSamiHyperlinkIconElement extends Components.SamiHyperlinkIcon, HTMLStencilElement {
    }
    var HTMLSamiHyperlinkIconElement: {
        prototype: HTMLSamiHyperlinkIconElement;
        new (): HTMLSamiHyperlinkIconElement;
    };
    interface HTMLSamiHyperlinkImageElement extends Components.SamiHyperlinkImage, HTMLStencilElement {
    }
    var HTMLSamiHyperlinkImageElement: {
        prototype: HTMLSamiHyperlinkImageElement;
        new (): HTMLSamiHyperlinkImageElement;
    };
    interface HTMLSamiListGroupElement extends Components.SamiListGroup, HTMLStencilElement {
    }
    var HTMLSamiListGroupElement: {
        prototype: HTMLSamiListGroupElement;
        new (): HTMLSamiListGroupElement;
    };
    interface HTMLSamiListSocialMediaElement extends Components.SamiListSocialMedia, HTMLStencilElement {
    }
    var HTMLSamiListSocialMediaElement: {
        prototype: HTMLSamiListSocialMediaElement;
        new (): HTMLSamiListSocialMediaElement;
    };
    interface HTMLSamiLoaderElement extends Components.SamiLoader, HTMLStencilElement {
    }
    var HTMLSamiLoaderElement: {
        prototype: HTMLSamiLoaderElement;
        new (): HTMLSamiLoaderElement;
    };
    interface HTMLSamiMainElement extends Components.SamiMain, HTMLStencilElement {
    }
    var HTMLSamiMainElement: {
        prototype: HTMLSamiMainElement;
        new (): HTMLSamiMainElement;
    };
    interface HTMLSamiSidebarElement extends Components.SamiSidebar, HTMLStencilElement {
    }
    var HTMLSamiSidebarElement: {
        prototype: HTMLSamiSidebarElement;
        new (): HTMLSamiSidebarElement;
    };
    interface HTMLSamiSubscriberElement extends Components.SamiSubscriber, HTMLStencilElement {
    }
    var HTMLSamiSubscriberElement: {
        prototype: HTMLSamiSubscriberElement;
        new (): HTMLSamiSubscriberElement;
    };
    interface HTMLElementTagNameMap {
        "sami-card-code": HTMLSamiCardCodeElement;
        "sami-card-image": HTMLSamiCardImageElement;
        "sami-card-tag": HTMLSamiCardTagElement;
        "sami-flex-code": HTMLSamiFlexCodeElement;
        "sami-flex-code-view": HTMLSamiFlexCodeViewElement;
        "sami-grid": HTMLSamiGridElement;
        "sami-header-mobile": HTMLSamiHeaderMobileElement;
        "sami-hyperlink": HTMLSamiHyperlinkElement;
        "sami-hyperlink-icon": HTMLSamiHyperlinkIconElement;
        "sami-hyperlink-image": HTMLSamiHyperlinkImageElement;
        "sami-list-group": HTMLSamiListGroupElement;
        "sami-list-social-media": HTMLSamiListSocialMediaElement;
        "sami-loader": HTMLSamiLoaderElement;
        "sami-main": HTMLSamiMainElement;
        "sami-sidebar": HTMLSamiSidebarElement;
        "sami-subscriber": HTMLSamiSubscriberElement;
    }
}
declare namespace LocalJSX {
    interface SamiCardCode {
        "author"?: string;
        "authorEmail"?: string;
        "authorFontSize"?: string;
        "backgroundColor"?: string;
        "backgroundImage"?: string;
        "box"?: boolean;
        "contentSubtitle"?: string;
        "contentSubtitleFontSize"?: string;
        "contentTitle"?: string;
        "contentTitleFontSize"?: string;
        "directionRight"?: boolean;
        "flexDirection"?: string;
        "identify"?: string;
        "marginTop"?: string;
        "paddingLeft"?: string;
        "paddingRight"?: string;
        "preview"?: boolean;
        "subtitleImage"?: string;
        "subtitleImageFontSize"?: string;
        "titleImage"?: string;
        "titleImageFontSize"?: string;
        "type"?: string;
    }
    interface SamiCardImage {
        /**
          * es: Sub título del card image en: Subtitle of card image Example: Css3
         */
        "backgroundImage"?: string;
        /**
          * es: Sub título del card image en: Subtitle of card image Example: Css3
         */
        "cardSubtitle"?: string;
        "cardTag"?: HTMLElement;
        /**
          * es: Título del card image en: Title of card image Example: Estilos
         */
        "cardTitle"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url"?: string;
    }
    interface SamiCardTag {
        /**
          * es: Fondo del Tag en: Background of Tag Example: #000
         */
        "background"?: string;
        /**
          * es: Radio del borde del Tag en: Border Radius of Tag Example: none
         */
        "borderRadius"?: string;
        /**
          * es: Posición de Abajo del Tag en: Position Bottom of Tag Example: bolder
         */
        "bottom"?: number;
        /**
          * es: Transición del Tag en: Transition of Tag Example: filter 200ms linear, transform 200ms linear
         */
        "class"?: string;
        /**
          * es: Color del Tag en: Color of Tag Example: 1
         */
        "color"?: string;
        /**
          * es: Estilo de Pso del texto del Tag en: Font Weigth about text of Tag Example: #fff
         */
        "fontWeight"?: string;
        /**
          * es: Alto del Tag en: Height of Tag Example: 40px
         */
        "height"?: string;
        /**
          * es: Posición Izquierda del Tag en: Position Left of Tag Example: 0px
         */
        "left"?: string;
        /**
          * es: Alto de la linea de texto del Tag en: Line Height of Tag Example: center
         */
        "lineHeight"?: number;
        /**
          * es: Posición del Tag en: Position of Tag Example: #fff
         */
        "position"?: string;
        /**
          * es: Posición Derecha del Tag en: Position Right of Tag Example: 0px
         */
        "right"?: number;
        /**
          * es: Texto del Tag en: Text of Tag Example: #fff
         */
        "text"?: string;
        /**
          * es: Alineamiento de texto del Tag en: Text Align of Tag Example: 2
         */
        "textAlign"?: string;
        /**
          * es: Posición de Abajo del Tag en: Position Bottom of Tag Example: bolder
         */
        "top"?: number;
        /**
          * es: Transición del Tag en: Transition of Tag Example: filter 200ms linear, transform 200ms linear
         */
        "transition"?: string;
        /**
          * es: Ancho del Tag en: Width of Tag Example: absolute
         */
        "width"?: string;
        /**
          * es: z-index del Tag en: z-index of Tag Example: 25px
         */
        "zIndex"?: number;
    }
    interface SamiFlexCode {
    }
    interface SamiFlexCodeView {
        "carousel"?: boolean;
        "identify"?: string;
    }
    interface SamiGrid {
        "padding"?: string;
    }
    interface SamiHeaderMobile {
        "hyperlinkBackground"?: string;
        "hyperlinkBackgroundImage"?: string;
        "hyperlinkBorderRadius"?: string;
        "hyperlinkHeight"?: string;
        "hyperlinkMaxWidth"?: string;
        "hyperlinkTarget"?: string;
        "hyperlinkUrl"?: string;
        "hyperlinkWidth"?: string;
    }
    interface SamiHyperlink {
        "fnClick"?: () => void;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "target"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "text"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url"?: string;
    }
    interface SamiHyperlinkIcon {
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "filter"?: string;
        "fnClick"?: () => void;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "height"?: number;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "target"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "type"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url"?: string;
        "urlImage"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "width"?: number;
    }
    interface SamiHyperlinkImage {
        "background"?: string;
        "backgroundImage"?: string;
        "borderRadius"?: string;
        "height"?: string;
        "maxWidth"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "padding"?: string;
        "refFunction"?: () => void;
        "target"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "text"?: string;
        /**
          * es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "url"?: string;
        "width"?: string;
    }
    interface SamiListGroup {
        "classAppend"?: string;
        /**
          * @State () data: Array<{ url: string; type: string; }> = [];  es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "data"?: Array<{
    url: string;
    text: string;
    padding: string;
    target: string;
    fnClick?: () => void;
  }>;
        "flexDirection"?: string;
        "width"?: string;
    }
    interface SamiListSocialMedia {
        "classAppend"?: string;
        /**
          * @State () data: Array<{ url: string; type: string; }> = [];  es: Ruta que redirige del card image en: Route of redirect card image Example: localhost/css3
         */
        "data"?: Array<{
    url: string;
    type: string;
    padding: string;
    target: string;
    urlImage: string;
    fnClick?: () => void;
  }>;
        "filter"?: string;
        "flexDirection"?: string;
    }
    interface SamiLoader {
    }
    interface SamiMain {
        "marginLeft"?: string;
    }
    interface SamiSidebar {
        "background"?: string;
        "boxShadow"?: string;
        "height"?: string;
        "hyperlinkFilter"?: string;
        "hyperlinkPadding"?: string;
        "hyperlinkUrl"?: string;
        "hyperlinkUrlImage"?: string;
        "maxWidth"?: string;
        "position"?: string;
        "top"?: number;
        "width"?: string;
        "zIndex"?: number;
    }
    interface SamiSubscriber {
        "background"?: string;
        "boxShadow"?: string;
        "height"?: string;
        "hyperlinkFilter"?: string;
        "hyperlinkIconHeight"?: number;
        "hyperlinkIconPadding"?: string;
        "hyperlinkIconUrlImage"?: string;
        "hyperlinkIconWidth"?: number;
        "hyperlinkPadding"?: string;
        "hyperlinkText"?: string;
        "hyperlinkUrl"?: string;
        "maxWidth"?: string;
        "position"?: string;
        "top"?: number;
        "width"?: string;
        "zIndex"?: number;
    }
    interface IntrinsicElements {
        "sami-card-code": SamiCardCode;
        "sami-card-image": SamiCardImage;
        "sami-card-tag": SamiCardTag;
        "sami-flex-code": SamiFlexCode;
        "sami-flex-code-view": SamiFlexCodeView;
        "sami-grid": SamiGrid;
        "sami-header-mobile": SamiHeaderMobile;
        "sami-hyperlink": SamiHyperlink;
        "sami-hyperlink-icon": SamiHyperlinkIcon;
        "sami-hyperlink-image": SamiHyperlinkImage;
        "sami-list-group": SamiListGroup;
        "sami-list-social-media": SamiListSocialMedia;
        "sami-loader": SamiLoader;
        "sami-main": SamiMain;
        "sami-sidebar": SamiSidebar;
        "sami-subscriber": SamiSubscriber;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sami-card-code": LocalJSX.SamiCardCode & JSXBase.HTMLAttributes<HTMLSamiCardCodeElement>;
            "sami-card-image": LocalJSX.SamiCardImage & JSXBase.HTMLAttributes<HTMLSamiCardImageElement>;
            "sami-card-tag": LocalJSX.SamiCardTag & JSXBase.HTMLAttributes<HTMLSamiCardTagElement>;
            "sami-flex-code": LocalJSX.SamiFlexCode & JSXBase.HTMLAttributes<HTMLSamiFlexCodeElement>;
            "sami-flex-code-view": LocalJSX.SamiFlexCodeView & JSXBase.HTMLAttributes<HTMLSamiFlexCodeViewElement>;
            "sami-grid": LocalJSX.SamiGrid & JSXBase.HTMLAttributes<HTMLSamiGridElement>;
            "sami-header-mobile": LocalJSX.SamiHeaderMobile & JSXBase.HTMLAttributes<HTMLSamiHeaderMobileElement>;
            "sami-hyperlink": LocalJSX.SamiHyperlink & JSXBase.HTMLAttributes<HTMLSamiHyperlinkElement>;
            "sami-hyperlink-icon": LocalJSX.SamiHyperlinkIcon & JSXBase.HTMLAttributes<HTMLSamiHyperlinkIconElement>;
            "sami-hyperlink-image": LocalJSX.SamiHyperlinkImage & JSXBase.HTMLAttributes<HTMLSamiHyperlinkImageElement>;
            "sami-list-group": LocalJSX.SamiListGroup & JSXBase.HTMLAttributes<HTMLSamiListGroupElement>;
            "sami-list-social-media": LocalJSX.SamiListSocialMedia & JSXBase.HTMLAttributes<HTMLSamiListSocialMediaElement>;
            "sami-loader": LocalJSX.SamiLoader & JSXBase.HTMLAttributes<HTMLSamiLoaderElement>;
            "sami-main": LocalJSX.SamiMain & JSXBase.HTMLAttributes<HTMLSamiMainElement>;
            "sami-sidebar": LocalJSX.SamiSidebar & JSXBase.HTMLAttributes<HTMLSamiSidebarElement>;
            "sami-subscriber": LocalJSX.SamiSubscriber & JSXBase.HTMLAttributes<HTMLSamiSubscriberElement>;
        }
    }
}
