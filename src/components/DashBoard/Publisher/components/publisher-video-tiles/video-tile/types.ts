import { OnStats } from '@dolbyio/webrtc-stats';

import { VideoViewProps } from '../../../../libs/video-view/src';
import { StreamTypes } from '../../../hooks/use-multi-media-streams';

import { SettingsPopoverProps } from './video-control-bar/settings-popover';

export interface VideoTileProps {
  canTogglePlayback?: boolean;
  isConnecting?: boolean;
  isStreaming?: boolean;
  onRemove?: () => void;
  onStartLive: () => void;
  onStopLive: () => void;
  settings?: SettingsPopoverProps;
  statistics?: OnStats;
  streamType?: StreamTypes;
  videoProps: VideoViewProps;
}
