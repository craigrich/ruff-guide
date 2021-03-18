function encodeName(name: string): string {
  return name.replace(/\s+/g, '-').toLowerCase();
}

export default encodeName;
