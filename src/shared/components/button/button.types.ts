export enum VARIANT {
  DARK,
  LIGHT,
  TRANSPARENT,
  TRANSPARENT_LIGHT,
  DEFAULT,
  DISABLED,
}
export enum SIZE {
  MEDIUM,
  LARGE,
}

export interface IButtonStylesParams {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  padding: string;
  borderRadius: number;
  fontSize: string;
  lineHeight: string;
}
