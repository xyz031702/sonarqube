/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
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
package org.sonarqube.ws.client.rules;

import java.util.List;
import javax.annotation.Generated;

/**
 * Create a custom rule.<br>Requires the 'Administer Quality Profiles' permission
 *
 * This is part of the internal API.
 * This is a POST request.
 * @see <a href="https://next.sonarqube.com/sonarqube/web_api/api/rules/create">Further information about this action online (including a response example)</a>
 * @since 4.4
 */
@Generated("https://github.com/SonarSource/sonar-ws-generator")
public class CreateRequest {

  private String customKey;
  private String manualKey;
  private String markdownDescription;
  private String name;
  private String params;
  private String preventReactivation;
  private String severity;
  private String status;
  private String templateKey;
  private String type;

  /**
   * Key of the custom rule
   *
   * This is a mandatory parameter.
   * Example value: "Todo_should_not_be_used"
   */
  public CreateRequest setCustomKey(String customKey) {
    this.customKey = customKey;
    return this;
  }

  public String getCustomKey() {
    return customKey;
  }

  /**
   * Manual rules are no more supported. This parameter is ignored
   *
   * Example value: "Error_handling"
   * @deprecated since 5.5
   */
  @Deprecated
  public CreateRequest setManualKey(String manualKey) {
    this.manualKey = manualKey;
    return this;
  }

  public String getManualKey() {
    return manualKey;
  }

  /**
   * Rule description
   *
   * This is a mandatory parameter.
   * Example value: "Description of my custom rule"
   */
  public CreateRequest setMarkdownDescription(String markdownDescription) {
    this.markdownDescription = markdownDescription;
    return this;
  }

  public String getMarkdownDescription() {
    return markdownDescription;
  }

  /**
   * Rule name
   *
   * This is a mandatory parameter.
   * Example value: "My custom rule"
   */
  public CreateRequest setName(String name) {
    this.name = name;
    return this;
  }

  public String getName() {
    return name;
  }

  /**
   * Parameters as semi-colon list of <key>=<value>, for example 'params=key1=v1;key2=v2' (Only for custom rule)
   *
   */
  public CreateRequest setParams(String params) {
    this.params = params;
    return this;
  }

  public String getParams() {
    return params;
  }

  /**
   * If set to true and if the rule has been deactivated (status 'REMOVED'), a status 409 will be returned
   *
   * Possible values:
   * <ul>
   *   <li>"true"</li>
   *   <li>"false"</li>
   *   <li>"yes"</li>
   *   <li>"no"</li>
   * </ul>
   */
  public CreateRequest setPreventReactivation(String preventReactivation) {
    this.preventReactivation = preventReactivation;
    return this;
  }

  public String getPreventReactivation() {
    return preventReactivation;
  }

  /**
   * Rule severity
   *
   * Possible values:
   * <ul>
   *   <li>"INFO"</li>
   *   <li>"MINOR"</li>
   *   <li>"MAJOR"</li>
   *   <li>"CRITICAL"</li>
   *   <li>"BLOCKER"</li>
   * </ul>
   */
  public CreateRequest setSeverity(String severity) {
    this.severity = severity;
    return this;
  }

  public String getSeverity() {
    return severity;
  }

  /**
   * Rule status
   *
   * Possible values:
   * <ul>
   *   <li>"BETA"</li>
   *   <li>"DEPRECATED"</li>
   *   <li>"READY"</li>
   *   <li>"REMOVED"</li>
   * </ul>
   */
  public CreateRequest setStatus(String status) {
    this.status = status;
    return this;
  }

  public String getStatus() {
    return status;
  }

  /**
   * Key of the template rule in order to create a custom rule (mandatory for custom rule)
   *
   * Example value: "java:XPath"
   */
  public CreateRequest setTemplateKey(String templateKey) {
    this.templateKey = templateKey;
    return this;
  }

  public String getTemplateKey() {
    return templateKey;
  }

  /**
   * Rule type
   *
   * Possible values:
   * <ul>
   *   <li>"CODE_SMELL"</li>
   *   <li>"BUG"</li>
   *   <li>"VULNERABILITY"</li>
   * </ul>
   */
  public CreateRequest setType(String type) {
    this.type = type;
    return this;
  }

  public String getType() {
    return type;
  }
}
