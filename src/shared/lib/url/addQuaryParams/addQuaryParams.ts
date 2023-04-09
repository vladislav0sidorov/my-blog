export function getQuaryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([title, value]) => {
    if (value !== undefined) {
      searchParams.set(title, value);
    }
  });

  return `?${searchParams.toString()}`;
}

export function addQuaryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQuaryParams(params));
}
