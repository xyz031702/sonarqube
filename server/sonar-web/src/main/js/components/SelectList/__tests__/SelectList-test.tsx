/*
 * SonarQube
 * Copyright (C) 2009-2019 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { waitAndUpdate } from 'sonar-ui-common/helpers/testUtils';
import SelectList, { Filter } from '../SelectList';

it('should display selected elements only by default', () => {
  const wrapper = shallowRender();
  expect(wrapper.state().filter).toBe(Filter.Selected);
});

it('should display a loader when searching', async () => {
  const wrapper = shallowRender();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state().loading).toBe(false);

  wrapper.instance().handleQueryChange('');
  expect(wrapper.state().loading).toBe(true);
  expect(wrapper).toMatchSnapshot();

  await waitAndUpdate(wrapper);
  expect(wrapper.state().loading).toBe(false);
});

it('should display a loader when updating filter', async () => {
  const wrapper = shallowRender();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state().loading).toBe(false);

  wrapper.instance().changeFilter(Filter.Unselected);
  expect(wrapper.state().loading).toBe(true);
  expect(wrapper).toMatchSnapshot();

  await waitAndUpdate(wrapper);
  expect(wrapper.state().filter).toBe(Filter.Unselected);
  expect(wrapper.state().loading).toBe(false);
});

it('should cancel filter selection when search is active', async () => {
  const wrapper = shallowRender();

  wrapper.setState({ filter: Filter.Selected });
  await waitAndUpdate(wrapper);
  expect(wrapper).toMatchSnapshot();

  wrapper.setState({ query: 'foobar' });
  await waitAndUpdate(wrapper);
  expect(wrapper).toMatchSnapshot();
});

it('should display pagination element properly', () => {
  const wrapper = shallowRender({ elementsTotalCount: 100, onLoadMore: jest.fn() });
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ needReload: true, onReload: jest.fn() });
  expect(wrapper).toMatchSnapshot();
});

function shallowRender(props: Partial<SelectList['props']> = {}) {
  return shallow<SelectList>(
    <SelectList
      elements={['foo', 'bar', 'baz']}
      onSearch={jest.fn(() => Promise.resolve())}
      onSelect={jest.fn(() => Promise.resolve())}
      onUnselect={jest.fn(() => Promise.resolve())}
      renderElement={(foo: string) => foo}
      selectedElements={['foo']}
      {...props}
    />
  );
}
