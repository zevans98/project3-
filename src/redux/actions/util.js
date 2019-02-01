/**
 * Action creators generator
 * @param {string} type Type of the action
 * @param {string[]} argNames Action properties names
 * @return {function} Action creator returning action with type and properties
 */
export function generateActionCreator(type, ...argNames) {
    return function(...args) {
        let createdAction = {type};
        argNames.forEach((argName, argIndex) => {
            createdAction[argNames[argIndex]] = args[argIndex];
        });
        return createdAction;
    };
}
