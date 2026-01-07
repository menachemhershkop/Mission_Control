import readLine from 'readline-sync';
import listMissions from './mission/listMission.js';
import input from 'analiza-sync'
import { mission } from './mission/mission.js';
import { createLog } from './log/createLog.js';


function menu(){
    const option =['List missions', 'Start mission', 'Tick engine', 'Complete stage', 'Write log', 'View logs', ' Dashboard']
    const userChoice =readLine.keyInSelect(option,'What are you want todo?')
    switch (userChoice){
        case(0):
        console.log(listMissions());
        break;
        case(1):
        const id = input('Enter ID mission: ')
        const active = mission.filter((mis)=> mis.id == id);
        if (active.length >1){
        if (active.status == 'planned'){
            active.status = 'active';
            createLog(id,'ACTION','Mission started', 'user')
        }
        else{
            console.log('This mission already exist');
            
        };
    };
        break;
        case(2):
        
    }
}

menu()