export interface Embed {
  type: EmbedType;
  source: string;
}

export enum EmbedType {
  IMAGE = 0,
  VIDEO = 1,
  AUDIO = 2,
}
