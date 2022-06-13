/*
 * @Author: Lin Ya
 * @Date: 2022-06-09 10:35:06
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-11 10:04:35
 * @Description: file content
 */
export interface IPageList {
    MaxPage: number;
    Page: number;
    PageSize: number;
    Total: number;
}
export interface PageList<T> extends IPageList {
    Items: T[];
}

export interface PageOptionsBase {
    page: number | null;
    pageSize: number | null;
}

export interface PageOptions<T> extends PageOptionsBase {
    query: T;
}