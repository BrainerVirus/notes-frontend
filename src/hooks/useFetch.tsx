type Options = {
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "HEAD"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE"
    | "PATCH";
  mode?: "cors" | "no-cors" | "*cors" | "same-origin";
  cache?:
    | "no-cache"
    | "*default"
    | "no-cache"
    | "reload"
    | "force-cache"
    | "only-if-cached";
  credentials?: "same-origin" | "include" | "*same-origin" | "omit";
  headers: {
    "Content-Type": "application/json";
  };
  body?: any;
};

type Data = {
  _id: string;
  content: string;
  creationDate: string;
  creationTime: string;
};

async function useFetch<T>(url: string, option: Options): Promise<Awaited<T>> {
  const res = await fetch(url, {
    method: option.method,
    headers: option.headers,
  });
  return res.json();
}

export default useFetch;
