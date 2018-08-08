/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/permissionsMappers";
import * as Parameters from "../models/parameters";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Permissions. */
export class Permissions {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Permissions.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Gets the list of user emails that have permissions to access your application.
   *
   * @param {string} appId The application ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(appId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.UserAccessList>> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      listOperationSpec);
  }

  /**
   * Adds a user to the allowed list of users to access this LUIS application. Users are added using
   * their email address.
   *
   * @param {string} appId The application ID.
   *
   * @param {UserCollaborator} userToAdd A model containing the user's email address.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  addWithHttpOperationResponse(appId: string, userToAdd: Models.UserCollaborator, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        appId,
        userToAdd,
        options
      },
      addOperationSpec);
  }

  /**
   * Removes a user from the allowed list of users to access this LUIS application. Users are removed
   * using their email address.
   *
   * @param {string} appId The application ID.
   *
   * @param {UserCollaborator} userToDelete A model containing the user's email address.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethodWithHttpOperationResponse(appId: string, userToDelete: Models.UserCollaborator, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        appId,
        userToDelete,
        options
      },
      deleteMethodOperationSpec);
  }

  /**
   * Replaces the current users access list with the one sent in the body. If an empty list is sent,
   * all access to other users will be removed.
   *
   * @param {string} appId The application ID.
   *
   * @param {CollaboratorsArray} collaborators A model containing a list of user's email addresses.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateWithHttpOperationResponse(appId: string, collaborators: Models.CollaboratorsArray, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        appId,
        collaborators,
        options
      },
      updateOperationSpec);
  }

  /**
   * Gets the list of user emails that have permissions to access your application.
   *
   * @param {string} appId The application ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.UserAccessList} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.UserAccessList} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(appId: string): Promise<Models.UserAccessList>;
  list(appId: string, options: msRest.RequestOptionsBase): Promise<Models.UserAccessList>;
  list(appId: string, callback: msRest.ServiceCallback<Models.UserAccessList>): void;
  list(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAccessList>): void;
  list(appId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserAccessList>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), appId, options, callback);
  }

  /**
   * Adds a user to the allowed list of users to access this LUIS application. Users are added using
   * their email address.
   *
   * @param {string} appId The application ID.
   *
   * @param {UserCollaborator} userToAdd A model containing the user's email address.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  add(appId: string, userToAdd: Models.UserCollaborator): Promise<Models.OperationStatus>;
  add(appId: string, userToAdd: Models.UserCollaborator, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  add(appId: string, userToAdd: Models.UserCollaborator, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  add(appId: string, userToAdd: Models.UserCollaborator, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  add(appId: string, userToAdd: Models.UserCollaborator, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.addWithHttpOperationResponse.bind(this), appId, userToAdd, options, callback);
  }

  /**
   * Removes a user from the allowed list of users to access this LUIS application. Users are removed
   * using their email address.
   *
   * @param {string} appId The application ID.
   *
   * @param {UserCollaborator} userToDelete A model containing the user's email address.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator): Promise<Models.OperationStatus>;
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), appId, userToDelete, options, callback);
  }

  /**
   * Replaces the current users access list with the one sent in the body. If an empty list is sent,
   * all access to other users will be removed.
   *
   * @param {string} appId The application ID.
   *
   * @param {CollaboratorsArray} collaborators A model containing a list of user's email addresses.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(appId: string, collaborators: Models.CollaboratorsArray): Promise<Models.OperationStatus>;
  update(appId: string, collaborators: Models.CollaboratorsArray, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  update(appId: string, collaborators: Models.CollaboratorsArray, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(appId: string, collaborators: Models.CollaboratorsArray, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(appId: string, collaborators: Models.CollaboratorsArray, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), appId, collaborators, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserAccessList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "userToAdd",
    mapper: {
      ...Mappers.UserCollaborator,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "luis/api/v2.0/apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "userToDelete",
    mapper: {
      ...Mappers.UserCollaborator,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "luis/api/v2.0/apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "collaborators",
    mapper: {
      ...Mappers.CollaboratorsArray,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
