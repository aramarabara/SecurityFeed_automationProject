import DOMPurify from 'dompurify';

export const sanitize = (content: string): string => {
  return DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'target']
  });
};

export const sanitizeText = (text: string): string => {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [] // Strip all HTML for titles/summaries
  });
};