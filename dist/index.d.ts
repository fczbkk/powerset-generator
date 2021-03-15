declare type powerSetGeneratorOptions = {
    maxResults?: number;
};
export declare function powerSetGenerator(input?: Array<unknown>, { maxResults }?: powerSetGeneratorOptions): IterableIterator<Array<unknown>>;
export default powerSetGenerator;
