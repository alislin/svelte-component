export interface KeyValuePair<T> extends KeyValuePairBase {
    Value: T;
}

export interface KeyValuePairBase {
    Key: string;
}

