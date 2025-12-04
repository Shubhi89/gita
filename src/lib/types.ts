export interface Verse {
  // Adjust these keys based on the actual API response (e.g., 'sloka', 'text', 'meaning')
  verse_number: number | string;
  sanskrit: string;     // The Devanagari text
  transliteration?: string; // English script (IAST)
  translation: string;  // English meaning
  purport?: string;     // Commentary (if available)
}

export interface Chapter {
  id: number;
  title: string;
}