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
import { translate } from 'sonar-ui-common/helpers/l10n';
import { DropdownOverlay } from 'sonar-ui-common/components/controls/Dropdown';
import IssueTypeIcon from 'sonar-ui-common/components/icons/IssueTypeIcon';
import SelectList from '../../common/SelectList';
import SelectListItem from '../../common/SelectListItem';

interface Props {
  issue: Pick<T.Issue, 'type'>;
  onSelect: (type: T.IssueType) => void;
}

const TYPES = ['BUG', 'VULNERABILITY', 'CODE_SMELL'];

export default function SetTypePopup({ issue, onSelect }: Props) {
  return (
    <DropdownOverlay>
      <SelectList currentItem={issue.type} items={TYPES} onSelect={onSelect}>
        {TYPES.map(type => (
          <SelectListItem item={type} key={type}>
            <IssueTypeIcon className="little-spacer-right" query={type} />
            {translate('issue.type', type)}
          </SelectListItem>
        ))}
      </SelectList>
    </DropdownOverlay>
  );
}
