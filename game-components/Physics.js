import Matter from 'matter-js';

const Physics = (entities, {touches, time, dispatch}) => {
    let mEngine = entities.physics.engine;
    
    touches.filter(t => t.type === 'press').forEach(t => {
        Matter.Body.setVelocity(entities.runner.body, {
            position: [0, -8]
        });
    });

    Matter.Engine.update(mEngine, time.delta);

    return entities;
}

export default Physics;