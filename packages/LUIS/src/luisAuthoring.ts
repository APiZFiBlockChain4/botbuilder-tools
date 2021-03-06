/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { LuisAuthoringContext } from "./luisAuthoringContext";

class LuisAuthoring extends LuisAuthoringContext {
  // Operation groups
  features: operations.Features;
  examples: operations.Examples;
  model: operations.Model;
  apps: operations.Apps;
  versions: operations.Versions;
  train: operations.Train;
  permissions: operations.Permissions;
  pattern: operations.Pattern;

  /**
   * @class
   * Initializes a new instance of the LuisAuthoring class.
   * @constructor
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: msRest.ServiceClientOptions) {
    super(credentials, options);
    this.features = new operations.Features(this);
    this.examples = new operations.Examples(this);
    this.model = new operations.Model(this);
    this.apps = new operations.Apps(this);
    this.versions = new operations.Versions(this);
    this.train = new operations.Train(this);
    this.permissions = new operations.Permissions(this);
    this.pattern = new operations.Pattern(this);
  }
}

// Operation Specifications

export { LuisAuthoring, Models as LuisAuthoringModels, Mappers as LuisAuthoringMappers };
