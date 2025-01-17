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
import { click } from 'sonar-ui-common/helpers/testUtils';
import { OrganizationsShortListItem } from '../OrganizationsShortListItem';
import { mockRouter, mockOrganization } from '../../../../helpers/testMocks';

it('renders correctly', () => {
  expect(shallowRender()).toMatchSnapshot();
});

it('calls onClick and redirects to org page', () => {
  const onClick = jest.fn();
  const push = jest.fn();
  const wrapper = shallowRender({ onClick, router: mockRouter({ push }) });

  click(wrapper);

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith('/organizations/foo');
});

function shallowRender(props: Partial<OrganizationsShortListItem['props']> = {}) {
  return shallow(
    <OrganizationsShortListItem
      onClick={jest.fn()}
      organization={mockOrganization()}
      router={mockRouter()}
      {...props}
    />
  );
}
