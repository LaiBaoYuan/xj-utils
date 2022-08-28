import moment from 'moment'

/**
 * 日期格式转化 年月日时分秒
 * @param val 日期对象
 * @returns 格式化字符串
 */
export function timeFormatter(val?:Date) {
    return moment(val).format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 日期格式转化 年月日
 * @param val 日期对象
 * @returns 格式化字符串
 */
export function dateFormatter(val?:Date):string {
    return moment(val).format('YYYY-MM-DD');
}