export function androidFetchWorkaround() {
    const originalFetch = (window as any).fetch;
    const xhrToResponse = xhr => {
      const headers = new Headers();
      xhr.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(line => {
        const [name, value] = line.split(': ', 2);
        headers.append(name, value);
      });
      return new Response(xhr.responseText, {
        status: xhr.status,
        statusText: xhr.statusText,
        headers,
      });
    };
    (window as any).fetch = (...args) => {
      const [url] = args;
      if (typeof url === 'string' && url.match(/\.svg$/)) {
        return new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
          req.open('GET', url, true);
          req.addEventListener('load', () => {
            resolve(xhrToResponse(req));
          });
          req.addEventListener('error', reject);
          req.send();
        });
      } else {
        return originalFetch.apply(window, args);
      }
    };
}
