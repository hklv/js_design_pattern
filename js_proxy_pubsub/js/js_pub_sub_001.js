/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/2
 */

var pubsub = {};
(function (q) {
    var topics = {};
    var subUid = -1;
    q.publish = function (topic, args) {
        if (!topics[topic]) {
            return false;
        }
        setTimeout(function () {
            var subscribers = topics[topic];
            var len = subscribers ? subscribers.length : 0;
            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);
        return true;
    };
    q.subscribe = function (topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i] === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }

                }
            }
        }
        return false;
    };
    q.showTopics = function () {
        alert(topics);
    }
}(pubsub));

var func = function (topics, data) {
    console.log(topics + ":" + data)
};

var testSubscribe = pubsub.subscribe('example1', func);
