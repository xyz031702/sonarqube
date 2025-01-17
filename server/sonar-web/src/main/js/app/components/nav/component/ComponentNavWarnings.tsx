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
import WarningIcon from 'sonar-ui-common/components/icons/WarningIcon';
import { FormattedMessage } from 'react-intl';
import { translate, translateWithParameters } from 'sonar-ui-common/helpers/l10n';
import { lazyLoad } from 'sonar-ui-common/components/lazyLoad';

const AnalysisWarningsModal = lazyLoad(() =>
  import('../../../../components/common/AnalysisWarningsModal')
);

interface Props {
  warnings: string[];
}

interface State {
  modal: boolean;
}

export default class ComponentNavWarnings extends React.PureComponent<Props, State> {
  state: State = { modal: false };

  handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    this.setState({ modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <>
        <div className="badge badge-focus badge-medium display-inline-flex-center js-component-analysis-warnings flex-1">
          <WarningIcon className="spacer-right" />
          <FormattedMessage
            defaultMessage={translate('component_navigation.last_analsys_had_warnings')}
            id="component_navigation.last_analsys_had_warnings"
            values={{
              warnings: (
                <a href="#" onClick={this.handleClick}>
                  {translateWithParameters(
                    'component_navigation.x_warnings',
                    String(this.props.warnings.length)
                  )}
                </a>
              )
            }}
          />
        </div>
        {this.state.modal && (
          <AnalysisWarningsModal onClose={this.handleCloseModal} warnings={this.props.warnings} />
        )}
      </>
    );
  }
}
