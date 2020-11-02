import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface Indicator {
  indicatorID?: string;
  indicatorName: string;
  indicatorValue: number;
  indicatorCategory: string;
  IndicatorType?: string;
}

export interface PersonalInfo {
  indicatorID: string;
  indicatorName: string;
  indicatorInput: string;
  icon: IconName;
  isActive: boolean;
}

export interface UserProfile {
  userName: string;
  currentJob: string;
  profilePicture: string;
  isLoggedIn: boolean;
}

export interface Nav {
  text?: string;
}
