declare const testData: string[];
declare const DEFAULT_MAX_RESULTS = 10000;
declare type powerSetGeneratorOptions = {
    maxResults?: number;
};
declare function powerSetGenerator(input?: Array<unknown>, { maxResults }?: powerSetGeneratorOptions): IterableIterator<Array<unknown>>;
declare function bumpOffsets(offsets?: number[], maxValue?: number): number[];
/**
 * Generates array of size N, filled with numbers sequence starting from 0.
 */
declare function generateOffsets(size?: number): Array<number>;
