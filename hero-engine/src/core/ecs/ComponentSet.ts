import { IComponent } from "./component";
import { Entity } from "./entity";

type constr<T> = { new(...args: unknown[]): T };

export class ComponentSet<T extends IComponent> {
    private dense: T[] = [];
    private sparse: Map<string, number> = new Map();

    isType<T extends IComponent>(constr: constr<T>):boolean{
        for (const component of this.dense) { 
            if (component instanceof constr) {
                return true;
            }else{
                return false;
            }
        }
      return false;
    }

    add(entity: Entity, value: T): boolean {
        if (this.sparse.has(entity)) {
            return false; // Return false if entity already exists
        }
        
        const denseIndex = this.dense.length;
        this.dense[denseIndex] = value;
        this.sparse.set(entity, denseIndex);
        return true;
    }

    remove(entity: Entity): boolean {
        const denseIndex = this.sparse.get(entity);
        
        if (denseIndex === undefined) {
            return false; // Return false if entity does not exist
        }
        
        // Move the last element in the dense array into the empty slot
        const lastElement = this.dense[this.dense.length - 1];
        this.dense[denseIndex] = lastElement;

        // Get the id of the last element
        const lastElementId = Array.from(this.sparse.keys())[this.dense.length - 1];
        
        // Update the sparse array with the new position of the last element
        this.sparse.set(lastElementId, denseIndex);

        // Remove the last element from the dense array and the sparse map
        this.dense.pop();
        this.sparse.delete(entity);
        
        return true;
    }

    get(entity: Entity): T | null {
        const denseIndex = this.sparse.get(entity);
        if (denseIndex !== undefined) {
            return this.dense[denseIndex];
        }
        return null; // Return null if entity does not exist
    }

    has(entity: Entity): boolean {
        return this.sparse.has(entity);
    }
}