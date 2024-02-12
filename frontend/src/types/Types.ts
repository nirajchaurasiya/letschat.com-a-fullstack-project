export type LayoutParamsType = {
  home?: boolean;
  search?: boolean;
  groupMessages?: boolean;
  history?: boolean;
  profile?: boolean;
  logout?: boolean;
  message?: boolean;
};
export type HomeParams = LayoutParamsType & {
  children: React.ReactNode;
};
