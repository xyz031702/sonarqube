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
import { Button } from 'sonar-ui-common/components/controls/buttons';
import ModalButton from 'sonar-ui-common/components/controls/ModalButton';
import CreateQualityGateForm from './CreateQualityGateForm';
import DocTooltip from '../../../components/docs/DocTooltip';

interface Props {
  canCreate: boolean;
  refreshQualityGates: () => Promise<void>;
  organization?: string;
}

export default function ListHeader({ canCreate, refreshQualityGates, organization }: Props) {
  return (
    <header className="page-header">
      {canCreate && (
        <div className="page-actions">
          <ModalButton
            modal={({ onClose }) => (
              <CreateQualityGateForm
                onClose={onClose}
                onCreate={refreshQualityGates}
                organization={organization}
              />
            )}>
            {({ onClick }) => (
              <Button id="quality-gate-add" onClick={onClick}>
                {translate('create')}
              </Button>
            )}
          </ModalButton>
        </div>
      )}

      <div className="display-flex-center">
        <h1 className="page-title">{translate('quality_gates.page')}</h1>
        <DocTooltip
          className="spacer-left"
          doc={import(/* webpackMode: "eager" */ 'Docs/tooltips/quality-gates/quality-gate.md')}
        />
      </div>
    </header>
  );
}
