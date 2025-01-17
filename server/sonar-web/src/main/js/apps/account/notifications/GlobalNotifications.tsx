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
import NotificationsList from './NotificationsList';
import SonarCloudNotifications from './SonarCloudNotifications';
import { isSonarCloud } from '../../../helpers/system';

interface Props {
  addNotification: (n: T.Notification) => void;
  channels: string[];
  notifications: T.Notification[];
  removeNotification: (n: T.Notification) => void;
  types: string[];
}

export default function GlobalNotifications(props: Props) {
  return (
    <>
      <section className="boxed-group">
        <h2>{translate('my_profile.overall_notifications.title')}</h2>

        <div className="boxed-group-inner">
          <table className="data zebra">
            <thead>
              <tr>
                <th />
                {props.channels.map(channel => (
                  <th className="text-center" key={channel}>
                    <h4>{translate('notification.channel', channel)}</h4>
                  </th>
                ))}
              </tr>
            </thead>

            <NotificationsList
              channels={props.channels}
              checkboxId={getCheckboxId}
              notifications={props.notifications}
              onAdd={props.addNotification}
              onRemove={props.removeNotification}
              types={props.types}
            />
          </table>
        </div>
      </section>
      {isSonarCloud() && <SonarCloudNotifications />}
    </>
  );
}

function getCheckboxId(type: string, channel: string) {
  return `global-notification-${type}-${channel}`;
}
