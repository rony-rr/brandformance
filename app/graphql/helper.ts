export const queryfy = (obj : any) => {
  // Make sure we don't alter integers.
  if (typeof obj === 'number') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const props : any = obj.map(value => `${queryfy(value)}`).join(',');
    return `[${props}]`;
  }

  if (typeof obj === 'object') {
    const props : any = Object.keys(obj)
      .map(key => `${key}:${queryfy(obj[key])}`)
      .join(',');
    return `{${props}}`;
  }

  return JSON.stringify(obj);
};