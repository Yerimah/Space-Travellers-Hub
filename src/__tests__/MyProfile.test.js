import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import MyProfile from '../Components/MyProfile/MyProfile';

const ProfileProvider = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

describe('test profile component', () => {
  it('render profile correctly', () => {
    const myProfile = renderer.create(<ProfileProvider />);
    expect(myProfile).toMatchSnapshot();
  });
});
