module.exports = [
    {
        title: 'javascript',
        collapsable: false,
        children: [
            './javascript',
            {
                title: 'ECMAScript 6 入门',
                collapsable: true,
                children: [
                    './javascript/es6/1'
                ]
            },
            './javascript/context',
            './javascript/closure',
            './javascript/this',
            './javascript/event_loop'
        ]
    },
    {
        title: 'javascript输出题',
        collapsable: false,
        children: [
            './js_question/question'
        ]
    },
    {
        title: 'leetcode',
        collapsable: false,
        children: [
            './leetcode/151',
            './leetcode/445',
            './leetcode/1282',
            './leetcode/560',
            './leetcode/974'
        ]
    },
    {
        title: 'css',
        collapsable: true,
        children: [
            './css/flex'
        ]
    }
]