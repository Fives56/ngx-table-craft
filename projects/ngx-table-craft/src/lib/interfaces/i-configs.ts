export interface IConfigs {
  title: string;
  headers: string[];
  properties: string[];
  footers: any[];
  action?: (data: any) => any;
}
