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
import { translate, translateWithParameters } from 'sonar-ui-common/helpers/l10n';
import HelpTooltip from 'sonar-ui-common/components/controls/HelpTooltip';
import ProfileLink from '../components/ProfileLink';
import BuiltInQualityProfileBadge from '../components/BuiltInQualityProfileBadge';

interface Props {
  className?: string;
  depth: number;
  displayLink?: boolean;
  extendsBuiltIn?: boolean;
  language: string;
  organization: string | null;
  profile: {
    activeRuleCount: number;
    isBuiltIn: boolean;
    key: string;
    language: string;
    name: string;
    overridingRuleCount?: number;
  };
}

export default function ProfileInheritanceBox({ displayLink = true, ...props }: Props) {
  const { profile, className, extendsBuiltIn } = props;
  const offset = 25 * props.depth;

  return (
    <tr className={className}>
      <td>
        <div style={{ paddingLeft: offset }}>
          {displayLink ? (
            <ProfileLink
              className="text-middle"
              language={props.language}
              name={profile.name}
              organization={props.organization}>
              {profile.name}
            </ProfileLink>
          ) : (
            <span className="text-middle">{profile.name}</span>
          )}
          {profile.isBuiltIn && <BuiltInQualityProfileBadge className="spacer-left" />}
          {extendsBuiltIn && (
            <HelpTooltip
              className="spacer-left"
              overlay={translate('quality_profiles.extends_built_in')}
            />
          )}
        </div>
      </td>

      <td>{translateWithParameters('quality_profile.x_active_rules', profile.activeRuleCount)}</td>

      <td>
        {profile.overridingRuleCount != null && (
          <p>
            {translateWithParameters(
              'quality_profiles.x_overridden_rules',
              profile.overridingRuleCount
            )}
          </p>
        )}
      </td>
    </tr>
  );
}
