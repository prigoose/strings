/**
 *
 * Asynchronously loads the component for SubmitPageGenerator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
