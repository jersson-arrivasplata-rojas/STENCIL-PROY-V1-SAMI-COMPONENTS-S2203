import { AlignItemsEnum } from "../enum/align-items.enum";
import { BackgroundColorEnum } from "../enum/background-color.enum";
import { BorderStyleEnum } from "../enum/border-style.enum";
import { ColorEnum } from "../enum/color.enum";
import { DisplayEnum } from "../enum/display.enum";
import { FontWeigthEnum } from "../enum/font-weigth.enum";
import { JustifyItemsEnum } from "../enum/justify-items.enum";
import { ListStyleEnum } from "../enum/list-style.enum";
import { MarginEnum } from "../enum/margin";
import { NumberEnum } from "../enum/number.enum";
import { ObjectFitEnum } from "../enum/object-fit.enum";
import { OpacityEnum } from "../enum/opacity.enum";
import { PositionEnum } from "../enum/position.enum";
import { TextAlignEnum } from "../enum/text-align.enum";
import { TextDecorationEnum } from "../enum/text-decoration.enum";
import { TextTransformEnum } from "../enum/text-transform.enum";
import { WordBreakEnum } from "../enum/word-break.enum";

export function textDecoration(text: string) {
  if (text && TextDecorationEnum[(text).toUpperCase()]) {
    return 'sami-text-decoration-' + TextDecorationEnum[text.toUpperCase()];
  }
  return '';
}
export function textColor(text: string) {
  if (text && ColorEnum[(text).toUpperCase()]) {
    return 'sami-text-color-' + ColorEnum[text.toUpperCase()];
  }
  return '';
}
export function position(text: string) {
  if (text && PositionEnum[(text).toUpperCase()]) {
    return 'sami-position-' + PositionEnum[text.toUpperCase()];
  }
  return '';
}
export function borderStyle(text: string) {
  if (text && BorderStyleEnum[(text).toUpperCase()]) {
    return 'sami-border-style-' + BorderStyleEnum[text.toUpperCase()];
  }
  return '';
}
export function borderWidth(text: string) {
  if (text && (NumberEnum['NUMBER_' + (text).toUpperCase()])) {
    return 'sami-border-width-' + (NumberEnum['NUMBER_' + (text).toUpperCase()]);
  }
  return '';
}
export function backgroundColor(text: string) {
  if (text && BackgroundColorEnum[(text).toUpperCase()]) {
    return 'sami-background-color-' + BackgroundColorEnum[text.toUpperCase()];
  }
  return '';
}
export function textAlign(text: string) {
  if (text && TextAlignEnum[(text).toUpperCase()]) {
    return 'sami-text-align-' + TextAlignEnum[text.toUpperCase()];
  }
  return '';
}
export function justifyItems(text: string) {
  if (text && JustifyItemsEnum[(text).toUpperCase()]) {
    return 'sami-justify-items-' + JustifyItemsEnum[text.toUpperCase()];
  }
  return '';
}
export function alignItems(text: string) {
  if (text && AlignItemsEnum[(text).toUpperCase()]) {
    return 'sami-align-items-' + AlignItemsEnum[text.toUpperCase()];
  }
  return '';
}
export function textTransform(text: string) {
  if (text && TextTransformEnum[(text).toUpperCase()]) {
    return 'sami-text-transform-' + TextTransformEnum[text.toUpperCase()];
  }
  return '';
}
export function fontWeigth(text: string) {
  if (text && (FontWeigthEnum[(text).toUpperCase()] || FontWeigthEnum['NUMBER_' + (text).toUpperCase()])) {
    return 'sami-font-weigth-' + (FontWeigthEnum[(text).toUpperCase()] || FontWeigthEnum['NUMBER_' + (text).toUpperCase()]);
  }
  return '';
}
export function listStyle(text: string) {
  if (text && (ListStyleEnum[(text).toUpperCase()])) {
    return 'sami-list-style-' + (ListStyleEnum[(text).toUpperCase()]);
  }
  return '';
}
export function opacity(text: string) {
  if (text && (OpacityEnum['NUMBER_' + (text).toUpperCase()])) {
    return 'sami-opacity-' + text;
  }
  return '';
}
export function filterInvert(text: string) {
  if (text && (NumberEnum['NUMBER_' + (text).toUpperCase()])) {
    return 'sami-filter-invert-' + (NumberEnum['NUMBER_' + (text).toUpperCase()]);
  }
  return '';
}
export function objectFit(text: string) {
  if (text && (ObjectFitEnum[(text).toUpperCase()])) {
    return 'sami-object-fit-' + (ObjectFitEnum[(text).toUpperCase()]);
  }
  return '';
}
export function display(text: string) {
  if (text && (DisplayEnum[(text).toUpperCase()])) {
    return 'sami-display-' + (DisplayEnum[(text).toUpperCase()]);
  }
  return '';
}
export function margin(text: string) {
  if (text && (MarginEnum[(text).toUpperCase()])) {
    return 'sami-margin-' + (MarginEnum[(text).toUpperCase()]);
  }
  return '';
}
export function wordBreak(text: string) {
  if (text && (WordBreakEnum[(text).toUpperCase()])) {
    return 'sami-word-break-' + (WordBreakEnum[(text).toUpperCase()]);
  }
  return '';
}
/*export function zIndex(text: string) {
  if (text && (NumberEnum['NUMBER_' + (text).toUpperCase()])) {
    return 'sami-z-index-' + (NumberEnum['NUMBER_' + (text).toUpperCase()]);
  }
  return '';
}*/