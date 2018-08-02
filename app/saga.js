// import all sagas into one global file, that I then pass to the store config
import HomePageSaga from './containers/HomePage/saga';
import SubmitSaga from './containers/SubmitPage/saga';

const sagas = [HomePageSaga, SubmitSaga];

export default sagas;
