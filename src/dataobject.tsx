import { DataObject, DataObjectFactory, SharedMap } from "./deps.ts";

export class TalkDataObject extends DataObject {
    public get IFluidHTMLView() {
        return this;
    }

    public static ObjectIdentifier = "TalkDataObject";

    /**
     * This is where you define all which Distributed Data Structures your component will use
     */
    private static readonly factory = new DataObjectFactory(
        TalkDataObject.ObjectIdentifier,
        TalkDataObject,
        [SharedMap.getFactory()],
        {}
    );

    public static getFactory() {
        return TalkDataObject.factory;
    }

    private domElement: HTMLElement | undefined;
    /**
     * ComponentInitializingFirstTime is where you do setup for your component. This is only called once the first time
     * your component is created. Anything that happens in initializingFirstTime will happen before any other
     * user will see the component.
     */
    public async initializingFirstTime() {
        // Create a new map for our Sudoku data
        const map = SharedMap.create(this.runtime);
        await map;
    }

    /**
     * This method will be called whenever the component has initialized, be it the first time or subsequent times.
     */
    public async hasInitialized() {
    }
}
