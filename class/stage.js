export default class Stage {
    constructor(stageId, name, state, dependsOn, start, end) {
        this.stageId = stageId
        this.name = name
        this.state = state
        this.dependsOn = dependsOn
        this.start = start
        this.end = end
    };
};