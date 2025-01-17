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
import VulnerabilityIcon from 'sonar-ui-common/components/icons/VulnerabilityIcon';
import { translate } from 'sonar-ui-common/helpers/l10n';
import IssuesFilter from './IssuesFilter';
import { Facet } from '../types';

interface Props {
  className?: string;
  facet?: Facet;
  maxFacetValue?: number;
  onQueryChange: (change: T.RawQuery) => void;
  organization?: { key: string };
  query: T.Dict<any>;
  value?: any;
}

export default function NewSecurityFilter(props: Props) {
  return (
    <IssuesFilter
      {...props}
      className="leak-facet-box"
      headerDetail={
        <span className="note little-spacer-left">
          {'('}
          <VulnerabilityIcon className="little-spacer-right" />
          {translate('metric.vulnerabilities.name')}
          {' )'}
        </span>
      }
      name="Security"
      property="new_security"
    />
  );
}
