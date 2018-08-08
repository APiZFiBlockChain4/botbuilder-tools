"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Mappers = require("../models/permissionsMappers");
const Parameters = require("../models/parameters");
/** Class representing a Permissions. */
class Permissions {
    /**
     * Create a Permissions.
     * @param {LuisAuthoringContext} client Reference to the service client.
     */
    constructor(client) {
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
    listWithHttpOperationResponse(appId, options) {
        return this.client.sendOperationRequest({
            appId,
            options
        }, listOperationSpec);
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
    addWithHttpOperationResponse(appId, userToAdd, options) {
        return this.client.sendOperationRequest({
            appId,
            userToAdd,
            options
        }, addOperationSpec);
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
    deleteMethodWithHttpOperationResponse(appId, userToDelete, options) {
        return this.client.sendOperationRequest({
            appId,
            userToDelete,
            options
        }, deleteMethodOperationSpec);
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
    updateWithHttpOperationResponse(appId, collaborators, options) {
        return this.client.sendOperationRequest({
            appId,
            collaborators,
            options
        }, updateOperationSpec);
    }
    list(appId, options, callback) {
        return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), appId, options, callback);
    }
    add(appId, userToAdd, options, callback) {
        return msRest.responseToBody(this.addWithHttpOperationResponse.bind(this), appId, userToAdd, options, callback);
    }
    deleteMethod(appId, userToDelete, options, callback) {
        return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), appId, userToDelete, options, callback);
    }
    update(appId, collaborators, options, callback) {
        return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), appId, collaborators, options, callback);
    }
}
exports.Permissions = Permissions;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec = {
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
const addOperationSpec = {
    httpMethod: "POST",
    path: "luis/api/v2.0/apps/{appId}/permissions",
    urlParameters: [
        Parameters.endpoint,
        Parameters.appId
    ],
    requestBody: {
        parameterPath: "userToAdd",
        mapper: Object.assign({}, Mappers.UserCollaborator, { required: true })
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
const deleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "luis/api/v2.0/apps/{appId}/permissions",
    urlParameters: [
        Parameters.endpoint,
        Parameters.appId
    ],
    requestBody: {
        parameterPath: "userToDelete",
        mapper: Object.assign({}, Mappers.UserCollaborator, { required: true })
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
const updateOperationSpec = {
    httpMethod: "PUT",
    path: "luis/api/v2.0/apps/{appId}/permissions",
    urlParameters: [
        Parameters.endpoint,
        Parameters.appId
    ],
    requestBody: {
        parameterPath: "collaborators",
        mapper: Object.assign({}, Mappers.CollaboratorsArray, { required: true })
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
//# sourceMappingURL=permissions.js.map