
export interface Artist {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
  workUrl: string;
  description: string;
  strengths: string[];
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}
