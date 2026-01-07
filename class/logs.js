export default class Logs {
    constructor(logId, missionId, type, message, createdBy, createdAt) {
        this.logId = logId
        this.missionId = missionId
        this.type = type
        this.message = message
        this.createdBy = createdBy
        this.createdAt = createdAt
    };
};