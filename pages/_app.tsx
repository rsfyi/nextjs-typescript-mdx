import { MDXProvider } from '@mdx-js/react';

import CodeBlock from '../components/mdx/CodeBlock';

// TODO - move below code to layout
const mdComponents = {
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};
