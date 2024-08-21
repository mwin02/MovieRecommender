export const apiFetcher = async (url: string) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  const json = await res.json();
  if (!res.ok) {
    const error: any = new Error(
      `An error occurred while fetching the data. Error: ${res.status} ${json.message}`
    );
    // Attach extra info to the error object.
    error.status = res.status;
    throw error;
  }

  return json;
};
