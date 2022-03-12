import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Dragon from '../Components/Dragon/Dragon';

const DragonProvider = () => (
  <Provider store={store}>
    <Dragon />
  </Provider>
);

describe('dragon component test', () => {
  it('reders correctly', () => {
    const dragonComponents = renderer.create(<DragonProvider />).toJSON();
    expect(dragonComponents).toMatchSnapshot();
  });

  it('test from the api', async () => {
    render(<DragonProvider />);
    const allDragons = await screen.findAllByText('Reserve Dragon');
    expect(allDragons).toHaveLength(2);
  });
});
