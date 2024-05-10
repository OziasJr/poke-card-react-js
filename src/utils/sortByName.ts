export function sortByName(a: {name: string, url: string}, b: {name: string, url: string}) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }