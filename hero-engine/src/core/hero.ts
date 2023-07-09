import { Renderer } from "../renderer/renderer";
import { WebGlRenderer } from "../renderer/webgl";
import { WebGpuRenderer } from "../renderer/webgpu";
import { rendererTypes } from "./constants";
import { EntityStore, SystemStore } from "./storage/cache";
import { ComponentStore } from "./storage/cache/component.store";

export class Hero{
    private componentStore:ComponentStore;
    private entityStore:EntityStore;
    private systemStore:SystemStore;
    private renderer: Renderer;

    constructor(rendererType?:rendererTypes){
        
        if(rendererType == "webgl") this.renderer = new WebGlRenderer();
        else this.renderer = new WebGpuRenderer();

        this.componentStore = new ComponentStore();
        this.entityStore = new EntityStore();
        this.systemStore = new SystemStore();

        
    }
}