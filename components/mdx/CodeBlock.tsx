import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import theme from 'prism-react-renderer/themes/github';

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');
  if (live) {
    console.log(mdx);
    return (
      <div style={{ marginTop: '40px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + code}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language='jsx'
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', borderRadius: '10px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
