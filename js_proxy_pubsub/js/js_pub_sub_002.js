/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/3
 */
function observer() {
    this.fns = [];
}
observer.prototype = {
    subscribe: function (fn) {
        this.fns.push(fn);
    },
    unsubscribe: function (fn) {
        this.fns.filter()
    }
};