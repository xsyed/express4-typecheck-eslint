// @ts-check

/// <reference path="../types/user.types.js" />

/**
 * Simulates fetching users from a database.
 * @returns {QEUser[]}
 */
exports.getUsers = function() {
    return [{ id: 123, name: "John Doe" }];
}
