export interface Indicator {
  indicatorID?: string,
  indicatorName: string;
  indicatorValue: number;
  indicatorCategory: string;
  IndicatorType?: string;
  icon?: string | null;
  isActive?: boolean;
}
