export interface Verse {
  shlok_no: string | number;
  lyrics: string;
  music: string;
}

export interface ApiResponse {
  message: string;
  data: Verse[];
}