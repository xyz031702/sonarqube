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
import ProjectAnalysisStepFromBuildTool, {
  ProjectAnalysisModes,
  Props
} from '../ProjectAnalysisStepFromBuildTool';
import { mockComponent, mockLoggedInUser } from '../../../../helpers/testMocks';

jest.mock('sonar-ui-common/helpers/storage', () => ({
  get: jest.fn().mockReturnValue(
    JSON.stringify({
      build: 'maven',
      os: 'linux'
    })
  ),
  save: jest.fn()
}));

it('should render correctly', () => {
  expect(shallowRender()).toMatchSnapshot();
});

it('should render the form correctly', () => {
  expect(
    shallowRender({ mode: ProjectAnalysisModes.CI })
      .find('Step')
      .prop<Function>('renderForm')()
  ).toMatchSnapshot();

  expect(
    shallowRender({ displayRowLayout: true })
      .find('Step')
      .prop<Function>('renderForm')()
  ).toMatchSnapshot();
});

function shallowRender(props: Partial<Props> = {}) {
  return shallow(
    <ProjectAnalysisStepFromBuildTool
      component={mockComponent()}
      currentUser={mockLoggedInUser()}
      mode={ProjectAnalysisModes.Custom}
      onDone={jest.fn()}
      open={true}
      setToken={jest.fn()}
      stepNumber={1}
      {...props}
    />
  );
}
