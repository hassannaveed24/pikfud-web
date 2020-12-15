import queryString from "query-string";
import moment from "moment";

export const parseQuery = (query) => queryString.parse(query);

export const getIsNew = (date) => {
    const time = new Date(date).getTime();
    const currentTime = new Date().getTime();
    return time + 1000 * 60 * 60 * 24 * 7 > currentTime;
};

export const getFormattedDate = (date, defaults = {}) => {
    let isNew = defaults?.isNew;
    if (!defaults.hasOwnProperty("isNew")) isNew = getIsNew(date);

    if (!isNew) return moment(date).format("D MMM[,] YY");
    return `${moment(date).fromNow("dd")} ago`;
};
