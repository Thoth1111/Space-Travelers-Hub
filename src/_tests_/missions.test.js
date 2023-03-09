import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../routes/missions';

jest.mock('../redux/missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
}));

const mockStore = configureMockStore([thunk]);

describe('Missions component', () => {
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
          booked: false,
        },
      ],
    });
  });

  it('renders mission data', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Seven')).toBeInTheDocument();
    expect(screen.getByText('Seven is Divine')).toBeInTheDocument();
    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('Eleven')).toBeInTheDocument();
    expect(screen.getByText('rhymes with seven')).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});