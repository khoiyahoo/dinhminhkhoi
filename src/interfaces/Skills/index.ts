export interface Tech {
  title: string;
  logo: string;
}

export interface Skill {
  id: number;
  name: string;
  techs: Tech[];
}
