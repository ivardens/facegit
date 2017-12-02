import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {shallow} from 'enzyme';
import AppRouter from '../AppRouter';
import PrivateRoute from '../../PrivateRoute';

describe('Компонент AppRouter', () => {
  const wrapper = shallow(<AppRouter />);
  it('Содержит компонент <Switch />', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
  it('Содержит компонент <PrivateRoute path="/user/:name" />', () => {
    expect(wrapper.find(<PrivateRoute path="/user/:name" />)).toBeTruthy();
  });
  it('Содержит компонент <Route path="/login" />', () => {
    expect(wrapper.find(<Route path="/login" />)).toBeTruthy();
  });
  it('Содержит компонент <Redirect to="/user/dex157" />', () => {
    expect(wrapper.find(<Redirect to="/user/dex157" />)).toBeTruthy();
  });
});
