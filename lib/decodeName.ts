function decodeName(name: string): string {
  return name.replace(/-/g, ' ');
}

export default decodeName;
