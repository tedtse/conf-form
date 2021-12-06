import mitt from 'mitt';

export type Events = {
  'form/cascade/source-change': string;
};

export default mitt<Events>();
