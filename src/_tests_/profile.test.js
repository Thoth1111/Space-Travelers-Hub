import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../routes/profile';
import { useSelector } from 'react-redux';

jest.mock('../redux/missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
}));

jest.mock('../routes/ReservedRockest', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="reserved-rockets"></div>),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
  }));

const mockStore = configureMockStore([thunk]);

describe('Profile component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: [
        {
          missionId: '7',
          missionName: 'Seven',
          description: 'Seven is Divine',
          booked: true,
        },
        {
          missionId: '11',
          missionName: 'Eleven',
          description: 'rhymes with seven',
          booked: true,
        },
      ],
      rockets: [
        {
            rocketId: '141',
            rocketName: 'Falcon 141',
            reserved: false,
        },
        {
            rocketId: '400',
            rocketName: 'Falcon 400',
            reserved: true,
        },
      ],
    });

    useSelector.mockImplementation((selector) => selector({
        missions: store.getState().missions,
        rockets: store.getState().rockets,
     }));
    });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(screen.getByText('Seven')).toBeInTheDocument();
    expect(screen.getByText('Eleven')).toBeInTheDocument();
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});