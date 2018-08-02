/**
 *
 * Asynchronously loads the component for HomePagePriya
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
