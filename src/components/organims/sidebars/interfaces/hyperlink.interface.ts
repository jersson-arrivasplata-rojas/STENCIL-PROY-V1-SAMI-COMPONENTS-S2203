export interface IHyperLink {
  url: string;
  text: string;
  padding: string;
  target: string;
  active: boolean;
  fnClick?: () => void;
}
