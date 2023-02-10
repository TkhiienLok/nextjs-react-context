declare type ActionMap<M extends {[index: string]: any}> = {
    [key in keyof M]: M[key] extends undefined
    ? {
        type: key;
    }
    : {
        type: key;
        payload: M[key];
    }
}