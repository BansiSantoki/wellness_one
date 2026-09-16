import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

/** Injects structured data into the document head for the lifetime of the page. */
export function JsonLd({ data, id = 'structured-data' }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [data, id]);

  return null;
}