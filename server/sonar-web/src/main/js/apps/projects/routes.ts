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
import { RouterState, RedirectFunction } from 'react-router';
import { save } from 'sonar-ui-common/helpers/storage';
import { isDefined } from 'sonar-ui-common/helpers/types';
import { lazyLoad } from 'sonar-ui-common/components/lazyLoad';
import DefaultPageSelectorContainer from './components/DefaultPageSelectorContainer';
import FavoriteProjectsContainer from './components/FavoriteProjectsContainer';
import { PROJECTS_DEFAULT_FILTER, PROJECTS_ALL } from './utils';

const routes = [
  { indexRoute: { component: DefaultPageSelectorContainer } },
  {
    path: 'all',
    onEnter(_: RouterState, replace: RedirectFunction) {
      save(PROJECTS_DEFAULT_FILTER, PROJECTS_ALL);
      replace('/projects');
    }
  },
  { path: 'favorite', component: FavoriteProjectsContainer },
  {
    path: 'create',
    component: lazyLoad(() => import('../create/project/CreateProjectPage'))
  }
].filter(isDefined);

export default routes;
