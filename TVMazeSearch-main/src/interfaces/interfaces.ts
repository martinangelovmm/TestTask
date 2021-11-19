export interface IMovieItem {
  score: number;
  show: IShow;
}

interface IShow {
  id: number;
  url: string;
  name: string;
  summary: string;
  image: IShowImage;
}

interface IShowImage {
  medium: string;
  original: string;
}

export interface IRoute {
  params: {showItem: IMovieItem};
}

export interface INavigation {
  navigate: (destination: string, params: IMovieItem) => void;
  goBack: () => void;
}
