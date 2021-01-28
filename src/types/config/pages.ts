export interface PagesConfig {
  pages: Array<PageConfig>;
}

export interface PageConfig {
  path: string;
  pageKey: string;
  hideWhen?: 'auth' | 'unauth';
  rows: Array<PageRow>;
}

export interface PageRow {
  key: string;
  className?: string;
  fullWidth?: boolean;
  columns: Array<PageColumn>;
}

export interface PageColumn {
  key?: string;
  className?: string;
  items: Array<PageItem>;
}

export interface PageItem {
  itemKey: string;
  className?: string;
  hideWhen?: 'auth' | 'unauth';
  config: PageItemConfig;
}

type PageItemConfig = TeaserImageConfig | RouterComponentConfig |
  MarkdownComponentConfig | ImageCardConfig | LoginCardConfig | VideoConfig | ImageConfig |
  AccordionListConfig | SimpleCard | SystemInfoConfig | AccountSettingsConfig |
  CommunicationSettingsConfig | DeleteAccountConfig | LogoCreditsConfig |
  RequiredSurveysConfig | OptionalSurveysConfig


export interface MarkdownComponentConfig {
  type: 'markdown';
  markdownUrl: string;
}

export interface ImageConfig {
  type: 'image';
  url?: string;
  urlKey?: string;
  altKey?: string;
  maxWidth?: number;
  maxHeight?: number;
}

export interface VideoConfig {
  type: 'video';
  minHeight?: number;
  posterUrlKey?: string;
  videoSources: Array<{
    urlKey: string;
    type: string;
  }>;
  fallbackTextKey?: string;
}

export interface TeaserImageConfig {
  type: 'teaserImage',
  image: {
    url: string;
    height?: number;
    className?: string;
    backgroundPosition?: string;
  }
  textBox?: {
    className?: string;
    titleKey?: string;
    contentKey?: string;
  }
}

export interface ImageCardConfig {
  type: 'imageCard';
  action?: {
    type: 'navigate' | 'openDialog';
    value: string;
  };
  imageSrc?: string;
  className?: string;
  showActionBtn?: boolean;
}

interface LoginCardConfig {
  type: 'loginCard';
  showInfoText: boolean;
}

export interface AccordionListConfig {
  type: 'accordionList';
  accordionCtrlsKey: string;
}

export interface SimpleCard {
  type: 'simpleCard';
  titleKey?: string;
  contentKey: string;
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface RouterComponentConfig {
  type: 'router';
}

export interface SystemInfoConfig {
  type: 'systemInfo';
}

export interface AccountSettingsConfig {
  type: 'accountSettings';
}

export interface CommunicationSettingsConfig {
  type: 'communicationSettings';
}

export interface DeleteAccountConfig {
  type: 'deleteAccount';
  // TODO: delete only account, delete data as well
}

export interface LogoCreditsConfig {
  type: 'logoCredits';
}

export interface RequiredSurveysConfig {
  type: 'requiredSurveys';
}

export interface OptionalSurveysConfig {
  type: 'optionalSurveys';
}
