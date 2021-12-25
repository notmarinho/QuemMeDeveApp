import { iUserInfo } from '@models/EntitiesTypes';

export type iUserState = {
  userInfo: iUserInfo | null;
  loading: boolean;
  error: string | null;
};
