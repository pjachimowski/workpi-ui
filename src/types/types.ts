import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface Indicator {
  indicatorID?: string | symbol;
  indicatorName: string | symbol;
  indicatorValue: number;
  indicatorCategory: string | symbol;
  IndicatorType?: string | symbol;
}

export interface PersonalInfo {
  indicatorID?: string | symbol;
  indicatorName: string | symbol;
  indicatorInput: string;
  icon: IconName;
  isActive: boolean;
}

export interface User {
  user_name: string;
  current_job: string;
  profile_picture: string;
  isActive: boolean;
}

export interface Nav {
  text?: string;
}
