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
import { submit } from 'sonar-ui-common/helpers/testUtils';
import { RemoteOrganizationChoose } from '../RemoteOrganizationChoose';
import { mockRouter, mockAlmOrganization } from '../../../../helpers/testMocks';

it('should render', () => {
  expect(shallowRender()).toMatchSnapshot();
});

it('should display an alert message', () => {
  expect(shallowRender({ almInstallId: 'foo' }).find('Alert')).toMatchSnapshot();
});

it('should display unbound installations', () => {
  const installation = { installationId: '12345', key: 'foo', name: 'Foo' };
  const push = jest.fn();
  const wrapper = shallowRender({
    almUnboundApplications: [installation],
    router: mockRouter({ push })
  });
  expect(wrapper).toMatchSnapshot();

  wrapper.find('Select').prop<Function>('onChange')(installation);
  submit(wrapper.find('form'));
  expect(push).toHaveBeenCalledWith({
    pathname: '/create-organization',
    query: { installation_id: installation.installationId }
  });
});

it('should display already bound alert message', () => {
  expect(
    shallowRender({
      almInstallId: 'foo',
      almOrganization: mockAlmOrganization(),
      boundOrganization: { avatar: 'bound-avatar', key: 'bound', name: 'Bound' }
    }).find('Alert')
  ).toMatchSnapshot();
});

function shallowRender(props: Partial<RemoteOrganizationChoose['props']> = {}) {
  return shallow(
    // @ts-ignore avoid passing everything from WithRouterProps
    <RemoteOrganizationChoose
      almApplication={{
        backgroundColor: 'blue',
        iconPath: 'icon/path',
        installationUrl: 'https://alm.application.url',
        key: 'github',
        name: 'GitHub'
      }}
      almUnboundApplications={[]}
      router={mockRouter()}
      {...props}
    />
  );
}
