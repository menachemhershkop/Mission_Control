export default class Mission {
    constructor(missionId, title, zone, priority, status, team, stages, createdAt) {
        this.missionId = missionId
        this.title = title
        this.zone = zone
        this.priority = priority
        this.status = status
        this.team = team
        this.stages = stages
        this.createdAt = createdAt
    };
};