import {
  IImage,
  IImageConfig,
} from 'src/app/components/interfaces/image.interface';

interface IInfoSectionDescription {
  image: {
    data: IImage;
    config: IImageConfig;
  };
  text: string;
}

export interface IInfoSection {
  title: string;
  subtitle: string;
  descriptionList: IInfoSectionDescription[];
  phoneImage: { data: IImage; config: IImageConfig };
}

export interface IInfoSectionConfig {
  reverse: boolean;
}
