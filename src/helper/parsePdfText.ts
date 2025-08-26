// utils/parsePdfText.ts
export type Section = { heading: string; body: string[] };

export function splitByHeadings(fullText: string): Section[] {
    const linesArr = fullText.split("|")
  // Example: split on lines that look like headings (ALL CAPS or “Title\n …”)
  const sections: Section[] = [];

  for(let i=0; i<linesArr.length; i++){
    const lines = linesArr[i].split('/')
    const s: Section = {heading: "", body: []}
    s.heading = lines[0]
    const sec = lines.splice(1)
    s.body = sec
    sections.push(s)
  }

  console.log(sections)
  
  return sections;
}
