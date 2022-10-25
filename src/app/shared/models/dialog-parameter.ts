import { MessageType } from './constants';

export interface DialogParameter {
  messageType: MessageType;
  title: string;
  message: string;
  showCancel: boolean;
  showOK: boolean;
  okReturnValue: boolean;
}
