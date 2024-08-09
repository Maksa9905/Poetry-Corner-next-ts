export interface ILink {
  href: string;
  text: string;
}

export interface IIcon {
  url: string;
  alt: string;
  width: number;
  height: number;
  side: 'left' | 'right';
}

export interface ITitle {
  href?: string;
  text: string;
  icon: IIcon;
}
