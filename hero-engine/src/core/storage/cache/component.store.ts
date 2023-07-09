import { ComponentSet, Entity, IComponent } from "../../ecs";

type constr<T> = { new(...args: unknown[]): T };

export class ComponentStore{
    private componentStore: Map<string, ComponentSet<IComponent>> = new Map();

    private registerComponent<T>(name: string) {
        this.componentStore.set(name, new ComponentSet<T>());
    }

    add<T>(name: string, entity: Entity, component: T) {
        const componentSet = this.componentStore.get(name);
        if (!componentSet) this.registerComponent<T>(name);
        componentSet!.add(entity, component);
    }

    get(name: string, entity: Entity): any | null {
        const componentSet = this.componentStore.get(name);
        if (!componentSet) return null;
        return componentSet.get(entity);
    }
    
    // Returns a componentSet<T> based on T
    // If I want to get my MovementComponents I would use getComponentSetByType(MovementComponents)
    getComponentSetByType<T extends IComponent>(constr: constr<T>): ComponentSet<T> | null {
        for (const [_, componentSet] of this.componentStore.entries()) {
            if(componentSet.isType(constr)) return componentSet as ComponentSet<T>;
        }
        return null;
    }

    //getComponentSetByName()
    getStore(): Map<string, ComponentSet<any>>{
        return this.componentStore;
    }

}