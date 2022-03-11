import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rockets from '../Components/Rockets/Rockets';

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Rockets components test', () => {
  it('check for proper rendering', () => {
    const allRockets = renderer.create(<RocketProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });

  it('test api data', async () => {
    render(<RocketProvider />);
    const rocketData = await screen.findAllByText('Reserve Rocket');
    expect(rocketData).toHaveLength(4);
  });
});
