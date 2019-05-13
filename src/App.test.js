import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
const API_URL = "https://hiring-task-api.herokuapp.com/v1"

jest.mock('axios');

axios.mockResolvedValue();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('callLeasesList()', () => {
  it('calls `axios()` with `/leases`, `get`', () => {
    const endpoint = `${API_URL}/leases`;
    const method = 'get';

    // call function
    callApi(endpoint, method);

    // assert axios()
    expect(axios).toBeCalledWith({ url: endpoint, method, data });
  });
});



describe('callMoreDetails()', () => {
  it('calls `axios()` with `/leases/:id`, `get`', () => {
    const endpoint = `${API_URL}/leases/lease-a`;
    const method = 'get';

    // call function
    callApi(endpoint, method);

    // assert axios()
    expect(axios).toBeCalledWith({ url: endpoint, method, data });
  });
}); 
