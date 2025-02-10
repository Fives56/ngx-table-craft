export interface IConfigs {
  title: string;
  class?: string;
  headers: string[];
  properties: string[];
  footers: any[];
  action?: (data: any) => any;
}
