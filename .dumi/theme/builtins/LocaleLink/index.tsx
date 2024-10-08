import * as React from 'react';
import { Link } from 'dumi';

type LinkProps = Parameters<typeof Link>[0];

export interface LocaleLinkProps extends LinkProps {
  sourceType: 'a' | 'Link';
}

const LocaleLink: React.FC<React.PropsWithChildren<LocaleLinkProps>> = ({
  sourceType,
  to,
  ...props
}) => {
  const Component = sourceType === 'a' ? 'a' : Link;

  const localeTo = React.useMemo(() => {
    if (!to || typeof to !== 'string') {
      return to;
    }

    // Auto locale switch
    const cells = to.match(/(\/[^#]*)(#.*)?/);
    if (cells) {
      let path = cells[1].replace(/\/$/, '');
      const hash = cells[2] || '';

      if (!path.endsWith('-ko')) {
        path = `${path}-ko`;
      } else if (path.endsWith('-ko')) {
        path = path.replace(/-ko$/, '');
      }

      return `${path}${hash}`;
    }

    return to;
  }, [to]);

  const linkProps: LocaleLinkProps = {
    ...props,
  } as LocaleLinkProps;

  if (to) {
    linkProps.to = localeTo;
  }

  return <Component {...linkProps} />;
};

export default LocaleLink;
