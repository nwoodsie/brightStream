import { StartDeviceProps } from '../../../libs/use-media-devices/src';
import { PublisherSources } from '../../../libs/use-publisher/src';

import { StreamsMap } from '../../hooks/use-multi-media-streams';

export interface ActionBarProps {
  audioDevices: InputDeviceInfo[];
  onAddLocalFile: (file: File) => void;
  onStartAllSources: () => void;
  onStartMediaDevice: (config: StartDeviceProps) => Promise<void>;
  onStartScreenShare: () => Promise<void>;
  onStopAllSources: () => void;
  maxSources?: number;
  shareUrl?: string;
  sources: PublisherSources;
  streams: StreamsMap;
  videoDevices: InputDeviceInfo[];
}
