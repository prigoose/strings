// import all sagas into one global file, that I then pass to the store config
import HomePageSaga from 'containers/HomePagePriya/saga';
import SubmitSaga from 'containers/SubmitPageGenerator/saga';

const sagas = [HomePageSaga, SubmitSaga];

export default sagas;
