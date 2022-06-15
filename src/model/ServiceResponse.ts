export interface ServiceResponseBase {
    Status: ActionStatus;
    Error: string;
    ErrorCode: string;
}

export interface ServiceResponse<T> extends ServiceResponseBase {
    Data: T;
}

/// <summary>
/// Action 状态
/// </summary>
export enum ActionStatus {
    /// <summary>
    /// 失败
    /// </summary>
    Failure = 0,
    /// <summary>
    /// 成功
    /// </summary>
    Successfully = 1
}