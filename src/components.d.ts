/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IListGroup } from "./components/molecules/lists/interfaces/list-group.interface";
export namespace Components {
    interface SamiCard {
    }
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
        "url": string;
    }
    interface SamiDropdown {
        "border"?: boolean;
        "data": string | Array<IListGroup>;
        "right": string;
        "text": string;
        "width": string;
    }
    interface SamiFooter {
    }
    interface SamiForm {
    }
    interface SamiGrid {
        "align"?: string;
        "padding"?: string;
        "type"?: string;
    }
    interface SamiHeader {
        "align"?: string;
        "desktop"?: boolean;
        "display"?: string;
        "position"?: string;
    }
    interface SamiHeaderMobile {
        "position"?: string;
    }
    interface SamiHyperlink {
        "background"?: string;
        "borderStyle"?: string;
        "borderWidth"?: string;
        "color"?: string;
        "decoration"?: string;
        "hyperlinkType"?: string;
        "onlyDesktop"?: boolean;
        "position"?: string;
    }
    interface SamiIcon {
    }
    interface SamiImg {
        "alt"?: string;
        "display"?: string;
        "filterInvert"?: string;
        "height"?: string;
        "margin"?: string;
        "objectFit"?: string;
        "opacity"?: string;
        "src"?: string;
        "width"?: string;
    }
    interface SamiInput {
        "align"?: string;
        "inputType"?: string;
        "type"?: string;
    }
    interface SamiList {
        "filterInvert"?: string;
        "listStyle"?: string;
        "opacity"?: string;
        "type"?: string;
    }
    interface SamiListItem {
        "type"?: string;
    }
    interface SamiLoader {
        "close": () => Promise<void>;
        "show": () => Promise<void>;
        "type": string;
    }
    interface SamiMain {
        "width"?: string;
        "wordBreak"?: string;
    }
    interface SamiParagraph {
        "align"?: string;
        "color"?: string;
        "decoration"?: string;
        "heading"?: string;
        "transform"?: string;
        "type": string;
        "weigth"?: string;
    }
    interface SamiSidebar {
        "show": () => Promise<void>;
    }
    interface SamiSidebarDashboard {
        "show": () => Promise<void>;
    }
    interface SamiSlider {
        "showStatus": boolean;
    }
    interface SamiSpan {
    }
    interface SamiSubscriber {
        "show": () => Promise<void>;
        "toggle": (e: MouseEvent) => void;
    }
    interface SamiTab {
    }
    interface SamiTag {
        "align"?: string;
        "background": string;
        "borderRadius": string;
        "bottom": string;
        "color": string;
        "fontWeight": string;
        "height": string;
        "left": string;
        "lineHeight": string;
        "position"?: string;
        "right": string;
        "top": string;
        "transition": string;
        "width": string;
        "zIndex": string;
    }
}
declare global {
    interface HTMLSamiCardElement extends Components.SamiCard, HTMLStencilElement {
    }
    var HTMLSamiCardElement: {
        prototype: HTMLSamiCardElement;
        new (): HTMLSamiCardElement;
    };
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
    interface HTMLSamiDropdownElement extends Components.SamiDropdown, HTMLStencilElement {
    }
    var HTMLSamiDropdownElement: {
        prototype: HTMLSamiDropdownElement;
        new (): HTMLSamiDropdownElement;
    };
    interface HTMLSamiFooterElement extends Components.SamiFooter, HTMLStencilElement {
    }
    var HTMLSamiFooterElement: {
        prototype: HTMLSamiFooterElement;
        new (): HTMLSamiFooterElement;
    };
    interface HTMLSamiFormElement extends Components.SamiForm, HTMLStencilElement {
    }
    var HTMLSamiFormElement: {
        prototype: HTMLSamiFormElement;
        new (): HTMLSamiFormElement;
    };
    interface HTMLSamiGridElement extends Components.SamiGrid, HTMLStencilElement {
    }
    var HTMLSamiGridElement: {
        prototype: HTMLSamiGridElement;
        new (): HTMLSamiGridElement;
    };
    interface HTMLSamiHeaderElement extends Components.SamiHeader, HTMLStencilElement {
    }
    var HTMLSamiHeaderElement: {
        prototype: HTMLSamiHeaderElement;
        new (): HTMLSamiHeaderElement;
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
    interface HTMLSamiIconElement extends Components.SamiIcon, HTMLStencilElement {
    }
    var HTMLSamiIconElement: {
        prototype: HTMLSamiIconElement;
        new (): HTMLSamiIconElement;
    };
    interface HTMLSamiImgElement extends Components.SamiImg, HTMLStencilElement {
    }
    var HTMLSamiImgElement: {
        prototype: HTMLSamiImgElement;
        new (): HTMLSamiImgElement;
    };
    interface HTMLSamiInputElement extends Components.SamiInput, HTMLStencilElement {
    }
    var HTMLSamiInputElement: {
        prototype: HTMLSamiInputElement;
        new (): HTMLSamiInputElement;
    };
    interface HTMLSamiListElement extends Components.SamiList, HTMLStencilElement {
    }
    var HTMLSamiListElement: {
        prototype: HTMLSamiListElement;
        new (): HTMLSamiListElement;
    };
    interface HTMLSamiListItemElement extends Components.SamiListItem, HTMLStencilElement {
    }
    var HTMLSamiListItemElement: {
        prototype: HTMLSamiListItemElement;
        new (): HTMLSamiListItemElement;
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
    interface HTMLSamiParagraphElement extends Components.SamiParagraph, HTMLStencilElement {
    }
    var HTMLSamiParagraphElement: {
        prototype: HTMLSamiParagraphElement;
        new (): HTMLSamiParagraphElement;
    };
    interface HTMLSamiSidebarElement extends Components.SamiSidebar, HTMLStencilElement {
    }
    var HTMLSamiSidebarElement: {
        prototype: HTMLSamiSidebarElement;
        new (): HTMLSamiSidebarElement;
    };
    interface HTMLSamiSidebarDashboardElement extends Components.SamiSidebarDashboard, HTMLStencilElement {
    }
    var HTMLSamiSidebarDashboardElement: {
        prototype: HTMLSamiSidebarDashboardElement;
        new (): HTMLSamiSidebarDashboardElement;
    };
    interface HTMLSamiSliderElement extends Components.SamiSlider, HTMLStencilElement {
    }
    var HTMLSamiSliderElement: {
        prototype: HTMLSamiSliderElement;
        new (): HTMLSamiSliderElement;
    };
    interface HTMLSamiSpanElement extends Components.SamiSpan, HTMLStencilElement {
    }
    var HTMLSamiSpanElement: {
        prototype: HTMLSamiSpanElement;
        new (): HTMLSamiSpanElement;
    };
    interface HTMLSamiSubscriberElement extends Components.SamiSubscriber, HTMLStencilElement {
    }
    var HTMLSamiSubscriberElement: {
        prototype: HTMLSamiSubscriberElement;
        new (): HTMLSamiSubscriberElement;
    };
    interface HTMLSamiTabElement extends Components.SamiTab, HTMLStencilElement {
    }
    var HTMLSamiTabElement: {
        prototype: HTMLSamiTabElement;
        new (): HTMLSamiTabElement;
    };
    interface HTMLSamiTagElement extends Components.SamiTag, HTMLStencilElement {
    }
    var HTMLSamiTagElement: {
        prototype: HTMLSamiTagElement;
        new (): HTMLSamiTagElement;
    };
    interface HTMLElementTagNameMap {
        "sami-card": HTMLSamiCardElement;
        "sami-card-code": HTMLSamiCardCodeElement;
        "sami-card-image": HTMLSamiCardImageElement;
        "sami-dropdown": HTMLSamiDropdownElement;
        "sami-footer": HTMLSamiFooterElement;
        "sami-form": HTMLSamiFormElement;
        "sami-grid": HTMLSamiGridElement;
        "sami-header": HTMLSamiHeaderElement;
        "sami-header-mobile": HTMLSamiHeaderMobileElement;
        "sami-hyperlink": HTMLSamiHyperlinkElement;
        "sami-icon": HTMLSamiIconElement;
        "sami-img": HTMLSamiImgElement;
        "sami-input": HTMLSamiInputElement;
        "sami-list": HTMLSamiListElement;
        "sami-list-item": HTMLSamiListItemElement;
        "sami-loader": HTMLSamiLoaderElement;
        "sami-main": HTMLSamiMainElement;
        "sami-paragraph": HTMLSamiParagraphElement;
        "sami-sidebar": HTMLSamiSidebarElement;
        "sami-sidebar-dashboard": HTMLSamiSidebarDashboardElement;
        "sami-slider": HTMLSamiSliderElement;
        "sami-span": HTMLSamiSpanElement;
        "sami-subscriber": HTMLSamiSubscriberElement;
        "sami-tab": HTMLSamiTabElement;
        "sami-tag": HTMLSamiTagElement;
    }
}
declare namespace LocalJSX {
    interface SamiCard {
    }
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
        "url"?: string;
    }
    interface SamiDropdown {
        "border"?: boolean;
        "data"?: string | Array<IListGroup>;
        "right"?: string;
        "text"?: string;
        "width"?: string;
    }
    interface SamiFooter {
    }
    interface SamiForm {
    }
    interface SamiGrid {
        "align"?: string;
        "padding"?: string;
        "type"?: string;
    }
    interface SamiHeader {
        "align"?: string;
        "desktop"?: boolean;
        "display"?: string;
        "position"?: string;
    }
    interface SamiHeaderMobile {
        "position"?: string;
    }
    interface SamiHyperlink {
        "background"?: string;
        "borderStyle"?: string;
        "borderWidth"?: string;
        "color"?: string;
        "decoration"?: string;
        "hyperlinkType"?: string;
        "onlyDesktop"?: boolean;
        "position"?: string;
    }
    interface SamiIcon {
    }
    interface SamiImg {
        "alt"?: string;
        "display"?: string;
        "filterInvert"?: string;
        "height"?: string;
        "margin"?: string;
        "objectFit"?: string;
        "opacity"?: string;
        "src"?: string;
        "width"?: string;
    }
    interface SamiInput {
        "align"?: string;
        "inputType"?: string;
        "type"?: string;
    }
    interface SamiList {
        "filterInvert"?: string;
        "listStyle"?: string;
        "opacity"?: string;
        "type"?: string;
    }
    interface SamiListItem {
        "type"?: string;
    }
    interface SamiLoader {
        "type"?: string;
    }
    interface SamiMain {
        "width"?: string;
        "wordBreak"?: string;
    }
    interface SamiParagraph {
        "align"?: string;
        "color"?: string;
        "decoration"?: string;
        "heading"?: string;
        "transform"?: string;
        "type"?: string;
        "weigth"?: string;
    }
    interface SamiSidebar {
    }
    interface SamiSidebarDashboard {
    }
    interface SamiSlider {
        "showStatus"?: boolean;
    }
    interface SamiSpan {
    }
    interface SamiSubscriber {
        "toggle"?: (e: MouseEvent) => void;
    }
    interface SamiTab {
    }
    interface SamiTag {
        "align"?: string;
        "background"?: string;
        "borderRadius"?: string;
        "bottom"?: string;
        "color"?: string;
        "fontWeight"?: string;
        "height"?: string;
        "left"?: string;
        "lineHeight"?: string;
        "position"?: string;
        "right"?: string;
        "top"?: string;
        "transition"?: string;
        "width"?: string;
        "zIndex"?: string;
    }
    interface IntrinsicElements {
        "sami-card": SamiCard;
        "sami-card-code": SamiCardCode;
        "sami-card-image": SamiCardImage;
        "sami-dropdown": SamiDropdown;
        "sami-footer": SamiFooter;
        "sami-form": SamiForm;
        "sami-grid": SamiGrid;
        "sami-header": SamiHeader;
        "sami-header-mobile": SamiHeaderMobile;
        "sami-hyperlink": SamiHyperlink;
        "sami-icon": SamiIcon;
        "sami-img": SamiImg;
        "sami-input": SamiInput;
        "sami-list": SamiList;
        "sami-list-item": SamiListItem;
        "sami-loader": SamiLoader;
        "sami-main": SamiMain;
        "sami-paragraph": SamiParagraph;
        "sami-sidebar": SamiSidebar;
        "sami-sidebar-dashboard": SamiSidebarDashboard;
        "sami-slider": SamiSlider;
        "sami-span": SamiSpan;
        "sami-subscriber": SamiSubscriber;
        "sami-tab": SamiTab;
        "sami-tag": SamiTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sami-card": LocalJSX.SamiCard & JSXBase.HTMLAttributes<HTMLSamiCardElement>;
            "sami-card-code": LocalJSX.SamiCardCode & JSXBase.HTMLAttributes<HTMLSamiCardCodeElement>;
            "sami-card-image": LocalJSX.SamiCardImage & JSXBase.HTMLAttributes<HTMLSamiCardImageElement>;
            "sami-dropdown": LocalJSX.SamiDropdown & JSXBase.HTMLAttributes<HTMLSamiDropdownElement>;
            "sami-footer": LocalJSX.SamiFooter & JSXBase.HTMLAttributes<HTMLSamiFooterElement>;
            "sami-form": LocalJSX.SamiForm & JSXBase.HTMLAttributes<HTMLSamiFormElement>;
            "sami-grid": LocalJSX.SamiGrid & JSXBase.HTMLAttributes<HTMLSamiGridElement>;
            "sami-header": LocalJSX.SamiHeader & JSXBase.HTMLAttributes<HTMLSamiHeaderElement>;
            "sami-header-mobile": LocalJSX.SamiHeaderMobile & JSXBase.HTMLAttributes<HTMLSamiHeaderMobileElement>;
            "sami-hyperlink": LocalJSX.SamiHyperlink & JSXBase.HTMLAttributes<HTMLSamiHyperlinkElement>;
            "sami-icon": LocalJSX.SamiIcon & JSXBase.HTMLAttributes<HTMLSamiIconElement>;
            "sami-img": LocalJSX.SamiImg & JSXBase.HTMLAttributes<HTMLSamiImgElement>;
            "sami-input": LocalJSX.SamiInput & JSXBase.HTMLAttributes<HTMLSamiInputElement>;
            "sami-list": LocalJSX.SamiList & JSXBase.HTMLAttributes<HTMLSamiListElement>;
            "sami-list-item": LocalJSX.SamiListItem & JSXBase.HTMLAttributes<HTMLSamiListItemElement>;
            "sami-loader": LocalJSX.SamiLoader & JSXBase.HTMLAttributes<HTMLSamiLoaderElement>;
            "sami-main": LocalJSX.SamiMain & JSXBase.HTMLAttributes<HTMLSamiMainElement>;
            "sami-paragraph": LocalJSX.SamiParagraph & JSXBase.HTMLAttributes<HTMLSamiParagraphElement>;
            "sami-sidebar": LocalJSX.SamiSidebar & JSXBase.HTMLAttributes<HTMLSamiSidebarElement>;
            "sami-sidebar-dashboard": LocalJSX.SamiSidebarDashboard & JSXBase.HTMLAttributes<HTMLSamiSidebarDashboardElement>;
            "sami-slider": LocalJSX.SamiSlider & JSXBase.HTMLAttributes<HTMLSamiSliderElement>;
            "sami-span": LocalJSX.SamiSpan & JSXBase.HTMLAttributes<HTMLSamiSpanElement>;
            "sami-subscriber": LocalJSX.SamiSubscriber & JSXBase.HTMLAttributes<HTMLSamiSubscriberElement>;
            "sami-tab": LocalJSX.SamiTab & JSXBase.HTMLAttributes<HTMLSamiTabElement>;
            "sami-tag": LocalJSX.SamiTag & JSXBase.HTMLAttributes<HTMLSamiTagElement>;
        }
    }
}
